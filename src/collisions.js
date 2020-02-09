import { sides } from "./side_enum";
import { Collider } from "./collider";

export function collisionDir(moveColliderPast, moveColliderFuture, staticCollider) {
  if (isColliding(moveColliderFuture, staticCollider)) {
    if (moveColliderPast.y + moveColliderPast.height < staticCollider.y) {
      return sides.DOWN;
    } else if (moveColliderPast.x + moveColliderPast.width < staticCollider.x) {
      return sides.RIGHT;
    } else if (moveColliderPast.x > staticCollider.x + staticCollider.width) {
      return sides.LEFT;
    } else {
      return sides.UP;
    }
  } else {
    return sides.NONE;
  }
}

export function isColliding(moveColliderFuture, staticCollider) {
  if (
    moveColliderFuture.x > staticCollider.x + staticCollider.width ||
    moveColliderFuture.x + moveColliderFuture.width < staticCollider.x ||
    moveColliderFuture.y > staticCollider.y + staticCollider.height ||
    moveColliderFuture.y + moveColliderFuture.height < staticCollider.y
  ) {
    return false;
  } else {
    return true;
  }
}

export function collisionCorrection(side, og, next, st){
    if (side === sides.DOWN){
        return new Collider(next.x, st.y - og.height, og.width, og.height);
    }
    else if (side === sides.UP){
        return new Collider(next.x, st.y + st.height, og.width, og.height);
    }
    else if (side === sides.LEFT){
        return new Collider(st.x + st.width, next.y, og.width, og.height);
    }
    else if (side === sides.RIGHT){
        return new Collider(st.x-og.width, next.y, og.width, og.height);
    }
    else return next;
}
