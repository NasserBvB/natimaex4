import cn from "classnames";
import FocusTrap from "focus-trap-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useMountTransition from "../../hooks/useMountTransition";
import './drawer.css'
function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");

  return drawerRoot;
}

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  position?: "left" | "right";
  removeWhenClosed?: boolean;
}

const Drawer = ({
  isOpen,
  children,
  className,
  onClose,
  position = "left",
  removeWhenClosed = true,
}: Props) => {
  const bodyRef = useRef(document.querySelector("body"));
  const portalRootRef = useRef(
    document.getElementById("drawer-root") || createPortalRoot()
  );
  const isTransitioning = useMountTransition(isOpen, 300);

  // Append portal root on mount
  useEffect(() => {
    bodyRef?.current?.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef?.current;

    return () => {
      // Clean up the portal when drawer component unmounts
      portal.remove();
      // Ensure scroll overflow is removed
      if (bodyEl) {
        bodyEl.style.overflow = "";
      }
    };
  }, []);

  // Prevent page scrolling when the drawer is open
  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        if (bodyRef && bodyRef.current)
          bodyRef.current.style.overflow = "hidden";
      } else {
        if (bodyRef && bodyRef.current) bodyRef.current.style.overflow = "";
      }
    };

    updatePageScroll();
  }, [isOpen]);

  // Allow Escape key to dismiss the drawer
  useEffect(() => {
    const onKeyPress = (e: any) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keyup", onKeyPress);
    }

    return () => {
      window.removeEventListener("keyup", onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }

  return createPortal(
    <FocusTrap active={isOpen}>
      <div
        aria-hidden={isOpen ? "false" : "true"}
        className={cn("drawer-container", {
          open: isOpen,
          in: isTransitioning,
          className,
        })}
      >
        <div className={cn("drawer", position)} role="dialog">
          {children}
        </div>
        <div className="backdrop" onClick={onClose} />
      </div>
    </FocusTrap>,
    portalRootRef.current
  );
};

export default Drawer;
