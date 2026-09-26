# icebreakers API

One Cloudflare Worker that runs both new features. It reads the question list from `../src/data/icebreakers.ts`, so adding a question to the site adds it here too.

**Live rooms** (`/rooms`). The host taps 👥 on a card and gets a 4-letter code with a QR. Everyone joins on their phone at `icebreakers.wiki/?room=CODE`, answers privately, and the host reveals all the answers at once. Answers can be shown with names or anonymously. Each room is a Durable Object, and a room with no activity for 24h is deleted.

**Slack** (`/slack/*`):
```
/icebreaker                  private preview → [Post to channel] [Shuffle]
/icebreaker deep             fun | creative | deep | quick | tech
/icebreaker daily 9am        a question every weekday at 9am (the timezone of whoever set it up); 9:30am works too
/icebreaker daily 9am quick  the same, limited to one kind of question
/icebreaker daily            show the schedule · /icebreaker daily off
```
Replies to a question go in a thread. A channel won't see the same question again until it has seen 200 others.

## Deploy (~15 min, free tier is enough)

```bash
cd api && bun install
bunx wrangler login
bunx wrangler d1 create icebreakers                    # paste the database_id into wrangler.toml
bunx wrangler d1 migrations apply icebreakers --remote
bunx wrangler deploy                                   # note the https://icebreakers-api.<you>.workers.dev URL
```

**Site:** add `VITE_API_URL: https://icebreakers-api.<you>.workers.dev` as an `env:` on the Build step in `.github/workflows/deploy.yml`. Without it, the live room and Slack buttons stay hidden.

**Slack app:**
1. On https://api.slack.com/apps, choose **Create New App → From a manifest** and paste `manifest.yml` with `YOUR-WORKER` replaced by the worker's host.
2. `bunx wrangler secret put SLACK_SIGNING_SECRET` (from **Basic Information**).
3. Pick one install mode:
   - **Anyone can add it (the site's Slack button):** `wrangler secret put SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET`, then turn on **Manage Distribution**. The site button links to `/slack/install`.
   - **Your own workspace only:** click **Install to Workspace**, then `wrangler secret put SLACK_BOT_TOKEN`.

## Local dev

```bash
bunx wrangler d1 migrations apply icebreakers --local
echo "SLACK_SIGNING_SECRET=anything" > .dev.vars
bunx wrangler dev --test-scheduled                     # then run the site with VITE_API_URL=http://localhost:8787
curl "localhost:8787/__scheduled?cron=*/5+*+*+*+*"     # fire the daily-question cron
```
