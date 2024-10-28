import { useState, useEffect, RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function useDraggable(elementRef: RefObject<HTMLElement>, isSidebarOpen: boolean) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let currentX: number;
    let currentY: number;
    let initialX: number;
    let initialY: number;

    const onMouseDown = (e: MouseEvent) => {
      initialX = e.clientX - position.x;
      initialY = e.clientY - position.y;
      setStartPos({ x: e.clientX, y: e.clientY });
      setIsDragging(true);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      e.preventDefault();
      
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      // Constrain to window bounds
      const sidebarWidth = isSidebarOpen ? 320 : 0;
      const maxX = window.innerWidth - element.offsetWidth;
      const maxY = window.innerHeight - element.offsetHeight;
      
      currentX = Math.max(sidebarWidth, Math.min(currentX, maxX));
      currentY = Math.max(0, Math.min(currentY, maxY));

      setPosition({ x: currentX, y: currentY });
    };

    const onMouseUp = (e: MouseEvent) => {
      // Only trigger click events if the drag distance is small
      const dragDistance = Math.hypot(
        e.clientX - startPos.x,
        e.clientY - startPos.y
      );
      
      if (dragDistance < 5) {
        // This was a click, not a drag - let the event propagate
        setIsDragging(false);
        return;
      }
      
      e.preventDefault();
      setIsDragging(false);
    };

    element.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      element.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [elementRef, isDragging, position, isSidebarOpen, startPos]);

  return { position, isDragging };
}