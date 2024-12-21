"use client";

import { useEffect, useRef } from "react";

const FlowerAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const randNum = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const Flower = function (opts) {
      this.left = opts.left;
      this.top = opts.top;
      this.size = randNum(1.5, 6);
      this.drawFlower();
    };

    Flower.prototype = {
      spinFlower: function (el) {
        let r = 0;
        const spd = Math.random() * (3 - 0.05) + 0.05;
        (function spin() {
          if (r === 350) {
            r = 0;
          } else {
            r += spd;
          }
          el.style.transform = "rotate(" + r + "deg)";
          requestAnimationFrame(spin);
        })();
      },
      fall: function (el) {
        const _this = this;
        let max_right = _this.left + randNum(20, 50);
        let max_left = _this.left - randNum(20, 50);
        let dir_i = randNum(0, 1);
        const directions = ["left", "right"];
        let direction = directions[dir_i];
        (function fall() {
          if (_this.left === max_left) {
            direction = "right";
            max_left = _this.left - randNum(20, 50);
          }
          if (_this.left === max_right) {
            direction = "left";
            max_right = _this.left + randNum(20, 50);
          }
          if (direction === "left") {
            _this.left -= 1;
          } else {
            _this.left += 1;
          }
          _this.top += 2;
          el.style.top = _this.top + "px";
          el.style.left = _this.left + "px";
          requestAnimationFrame(fall);
        })();
      },
      fadeOut: function (el) {
        el.style.opacity = 1;

        (function fade() {
          if ((el.style.opacity -= 0.007) < 0) {
            el.parentNode.removeChild(el);
          } else {
            requestAnimationFrame(fade);
          }
        })();
      },
      get petal() {
        const petal = document.createElement("div");
        petal.style.userSelect = "none";
        petal.style.position = "absolute";
        petal.style.background = "radial-gradient(white 10%, pink 70%)";
        petal.style.backgroundSize = this.size + "vmin";
        petal.style.backgroundPosition = "-" + this.size / 2 + "vmin 0";
        petal.style.width = petal.style.height = this.size / 2 + "vmin";
        petal.style.borderTopLeftRadius = petal.style.borderBottomRightRadius =
          (42.5 * this.size) / 100 + "vmin";
        return petal;
      },
      get petal_styles() {
        return [
          {
            transform: "rotate(-47deg)",
            left: "50%",
            marginLeft: "-" + this.size / 4 + "vmin",
            top: 0,
          },
          {
            transform: "rotate(15deg)",
            left: "100%",
            marginLeft: "-" + (this.size * 39) / 100 + "vmin",
            top: (this.size * 17.5) / 100 + "vmin",
          },
          {
            transform: "rotate(93deg)",
            left: "100%",
            marginLeft: "-" + (this.size * 51) / 100 + "vmin",
            top: (this.size * 58) / 100 + "vmin",
          },
          {
            transform: "rotate(175deg)",
            left: "0%",
            marginLeft: (this.size * 5) / 100 + "vmin",
            top: (this.size * 58) / 100 + "vmin",
          },
          {
            transform: "rotate(250deg)",
            left: "0%",
            marginLeft: "-" + (this.size * 8) / 100 + "vmin",
            top: (this.size * 17.5) / 100 + "vmin",
          },
        ];
      },
      get flower() {
        const flower = document.createElement("div");
        flower.style.userSelect = "none";
        flower.style.position = "absolute";
        flower.style.left = this.left + "px";
        flower.style.top = this.top + "px";
        flower.style.width = this.size + "vmin";
        flower.style.height = this.size + "vmin";
        for (let i = 0; i < 5; i++) {
          const petal = this.petal;
          petal.style.transform = this.petal_styles[i]["transform"];
          petal.style.top = this.petal_styles[i]["top"];
          petal.style.left = this.petal_styles[i]["left"];
          petal.style.marginLeft = this.petal_styles[i]["marginLeft"];
          flower.appendChild(petal);
        }
        this.fadeOut(flower);
        this.spinFlower(flower);
        this.fall(flower);
        return flower;
      },
      drawFlower: function () {
        containerRef.current.appendChild(this.flower);
      },
    };

    const handleMouseDown = (e) => {
      const amt = randNum(1, 5);
      for (let i = 0; i < amt; i++) {
        const top = randNum(e.clientY - 30, e.clientY + 30);
        const left = randNum(e.clientX - 30, e.clientX + 10);
        new Flower({
          top: top,
          left: left,
        });
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    />
  );
};

export default FlowerAnimation;
