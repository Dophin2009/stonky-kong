import { player, start, hide, unhide } from "./main";

let up = false;
let down = false;
let left = false;
let right = false;
export let started = false;
export let isLooping = true;
export let isScrollLocked = false;

export function setupKeyListener() {
  document.addEventListener("keydown", function(event) {
    if (event.key === "\\") {
      if (!started) {
        start();
        started = true;
        isLooping = true;
        isScrollLocked = true;
      } else if (isLooping) {
        pause();
      } else {
        unhide();
        isLooping = true;
        isScrollLocked = true;
      }
    }

    if (event.key === " " || event.key === "ArrowUp" || event.key === "w") {
      up = true;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      down = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      left = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      right = true;
    }
  });
  document.addEventListener("keyup", function(event) {
    if (event.key === " " || event.key === "ArrowUp" || event.key === "w") {
      up = false;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      down = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      left = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      right = false;
    }
  });
}

export function updatePlayer() {
  player.move(up, down, left, right);
}

export function pause() {
  hide();
  isLooping = false;
  isScrollLocked = false;
}