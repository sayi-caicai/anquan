"use strict";

const config = {
  title: "惠州安全生产月｜火眼金睛·安全隐患找茬",
  rewardUrl: "#reward-demo",
  levelCount: 5,
  spotsPerLevel: 5
};

const levels = [
  {
    id: 1,
    title: "惠州西湖游园安全",
    scene: "assets/levels/level-1.jpg",
    hazards: [
      { name: "电动车乱停充电", tip: "电动车不得私拉电线充电，充电区域要远离人群密集通道。", x: 2, y: 36, w: 28, h: 17 },
      { name: "湖边护栏破损", tip: "亲水区域护栏破损应立即围蔽维修，防止人员跌落。", x: 66, y: 40, w: 31, h: 18 },
      { name: "湿滑积水未处理", tip: "公共步道出现积水要及时清理，并设置防滑提醒。", x: 30, y: 56, w: 45, h: 15 },
      { name: "消防通道被占用", tip: "消防设施和应急通道周边不能堆放杂物。", x: 0, y: 72, w: 38, h: 20 },
      { name: "儿童攀爬危险区域", tip: "儿童靠近水域或攀爬护栏时，监护人应及时劝阻。", x: 66, y: 65, w: 32, h: 25 }
    ]
  },
  {
    id: 2,
    title: "惠州工业园区车间安全",
    scene: "assets/levels/level-2.jpg",
    hazards: [
      { name: "作业人员未戴安全帽", tip: "进入生产和检维修区域应按要求佩戴安全帽等防护用品。", x: 8, y: 12, w: 23, h: 22 },
      { name: "设备防护罩缺失", tip: "转动部件必须安装防护罩，严禁带病运行。", x: 66, y: 24, w: 31, h: 22 },
      { name: "电缆拖地绊倒风险", tip: "临时电缆要架空或加防护槽，避免绊倒和漏电。", x: 32, y: 48, w: 40, h: 17 },
      { name: "灭火器被货物遮挡", tip: "消防器材前方要保持无遮挡，确保紧急时能快速取用。", x: 0, y: 63, w: 32, h: 22 },
      { name: "货物堆放过高", tip: "货物堆码要稳固限高，防止倾倒砸伤。", x: 64, y: 55, w: 36, h: 33 }
    ]
  },
  {
    id: 3,
    title: "惠州商圈夜市消防安全",
    scene: "assets/levels/level-3.jpg",
    hazards: [
      { name: "燃气瓶靠近明火", tip: "燃气瓶应远离热源和明火，并保持通风。", x: 0, y: 18, w: 29, h: 30 },
      { name: "插线板超负荷使用", tip: "摊位用电不能多插头串接，需规范布线并配漏保。", x: 56, y: 42, w: 31, h: 15 },
      { name: "油污地面湿滑", tip: "油污和积水要及时清理，避免顾客和摊主滑倒。", x: 31, y: 53, w: 40, h: 15 },
      { name: "消防出口被堵塞", tip: "疏散通道和安全出口必须保持畅通。", x: 0, y: 61, w: 35, h: 31 },
      { name: "明火锅具无人看管", tip: "明火烹饪必须有人值守，离开前应先关闭火源。", x: 66, y: 65, w: 31, h: 21 }
    ]
  },
  {
    id: 4,
    title: "惠州建筑工地安全",
    scene: "assets/levels/level-4.jpg",
    hazards: [
      { name: "高处作业未系安全带", tip: "临边和高处作业必须正确使用安全带。", x: 19, y: 8, w: 22, h: 18 },
      { name: "临边防护缺失", tip: "楼层临边、洞口应设置牢固防护栏和警示。", x: 68, y: 16, w: 28, h: 18 },
      { name: "材料乱堆堵塞通道", tip: "钢管、木方等材料应分类码放，保持通道畅通。", x: 33, y: 45, w: 41, h: 20 },
      { name: "基坑警示不足", tip: "基坑周边应设置硬质围挡、警示和夜间警示灯。", x: 0, y: 66, w: 38, h: 25 },
      { name: "施工用电裸露", tip: "临时配电箱要上锁防雨，电缆不得破损拖地。", x: 69, y: 62, w: 29, h: 25 }
    ]
  },
  {
    id: 5,
    title: "惠州滨海文旅安全",
    scene: "assets/levels/level-5.jpg",
    hazards: [
      { name: "游客越过警戒线", tip: "海边警戒线外存在跌落和潮汐风险，游客不得翻越。", x: 4, y: 27, w: 27, h: 16 },
      { name: "救生设备缺失", tip: "救生圈、救生杆等设备要定点配置并保持可用。", x: 61, y: 26, w: 18, h: 16 },
      { name: "警示牌被遮挡", tip: "安全提示牌不能被杂物遮挡，需保持醒目可见。", x: 6, y: 46, w: 36, h: 18 },
      { name: "临时电缆外露", tip: "景区摊位临时用电要穿管保护，避免游客触碰。", x: 74, y: 46, w: 24, h: 18 },
      { name: "应急通道被占用", tip: "应急通道和黄色网格区域严禁停车、堆货。", x: 54, y: 64, w: 41, h: 23 }
    ]
  }
];

const $ = (selector) => document.querySelector(selector);

const els = {
  screens: {
    loading: $("#loadingScreen"),
    start: $("#startScreen"),
    game: $("#gameScreen"),
    result: $("#resultScreen"),
    reward: $("#rewardScreen")
  },
  loadingBar: $("#loadingBar"),
  loadingText: $("#loadingText"),
  startButton: $("#startButton"),
  homeButton: $("#homeButton"),
  levelKicker: $("#levelKicker"),
  levelTitle: $("#levelTitle"),
  scoreDisplay: $("#scoreDisplay"),
  sceneShell: $("#sceneShell"),
  sceneImage: $("#sceneImage"),
  spotsLayer: $("#spotsLayer"),
  rippleLayer: $("#rippleLayer"),
  foundStatus: $("#foundStatus"),
  progressDots: $("#progressDots"),
  answerModal: $("#answerModal"),
  answerImage: $("#answerImage"),
  answerMarkers: $("#answerMarkers"),
  answerTitle: $("#answerTitle"),
  answerList: $("#answerList"),
  nextButton: $("#nextButton"),
  finalScore: $("#finalScore"),
  rewardButton: $("#rewardButton"),
  restartButton: $("#restartButton"),
  backResultButton: $("#backResultButton"),
  musicToggle: $("#musicToggle")
};

const state = {
  screen: "loading",
  currentIndex: 0,
  score: 0,
  found: new Set(),
  locked: false
};

const sound = (() => {
  let ctx;
  let musicGain;
  let musicOscA;
  let musicOscB;
  let playing = false;
  let userMuted = false;

  function ensureContext() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ctx.state === "suspended") {
      ctx.resume();
    }
  }

  function tone(freq, duration = 0.12, type = "sine", gain = 0.05, delay = 0) {
    ensureContext();
    const start = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(gain, start + 0.015);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(amp);
    amp.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  }

  function startMusic() {
    ensureContext();
    if (playing) return;
    musicGain = ctx.createGain();
    musicGain.gain.setValueAtTime(0.018, ctx.currentTime);
    musicOscA = ctx.createOscillator();
    musicOscB = ctx.createOscillator();
    musicOscA.type = "sine";
    musicOscB.type = "triangle";
    musicOscA.frequency.setValueAtTime(196, ctx.currentTime);
    musicOscB.frequency.setValueAtTime(294, ctx.currentTime);
    musicOscA.connect(musicGain);
    musicOscB.connect(musicGain);
    musicGain.connect(ctx.destination);
    musicOscA.start();
    musicOscB.start();
    playing = true;
    updateMusicButton();
  }

  function stopMusic() {
    if (musicOscA) musicOscA.stop();
    if (musicOscB) musicOscB.stop();
    musicOscA = null;
    musicOscB = null;
    musicGain = null;
    playing = false;
    updateMusicButton();
  }

  function updateMusicButton() {
    els.musicToggle.classList.toggle("is-playing", playing);
    els.musicToggle.classList.toggle("is-muted", !playing);
  }

  return {
    unlock() {
      ensureContext();
      if (!userMuted) startMusic();
    },
    toggleMusic() {
      ensureContext();
      if (playing) {
        userMuted = true;
        stopMusic();
      } else {
        userMuted = false;
        startMusic();
      }
    },
    correct() {
      tone(620, 0.08, "sine", 0.055);
      tone(840, 0.1, "sine", 0.045, 0.07);
    },
    wrong() {
      tone(150, 0.16, "sawtooth", 0.045);
    },
    complete() {
      tone(520, 0.09, "triangle", 0.055);
      tone(660, 0.09, "triangle", 0.055, 0.08);
      tone(880, 0.16, "triangle", 0.05, 0.16);
    }
  };
})();

function setScreen(name) {
  state.screen = name;
  Object.entries(els.screens).forEach(([key, screen]) => {
    screen.classList.toggle("is-active", key === name);
  });
}

function preloadImages() {
  let loaded = 0;
  const total = levels.length;
  const startedAt = Date.now();

  levels.forEach((level) => {
    const img = new Image();
    img.onload = img.onerror = () => {
      loaded += 1;
      const progress = Math.round((loaded / total) * 100);
      els.loadingBar.style.width = `${progress}%`;
      els.loadingText.textContent = `正在加载惠州关卡资源... ${progress}%`;
      if (loaded === total) {
        const wait = Math.max(350, 950 - (Date.now() - startedAt));
        window.setTimeout(() => setScreen("start"), wait);
      }
    };
    img.src = level.scene;
  });
}

function resetGame() {
  state.currentIndex = 0;
  state.score = 0;
  state.found = new Set();
  state.locked = false;
  els.scoreDisplay.textContent = "0";
}

function startGame() {
  resetGame();
  loadLevel(0);
  setScreen("game");
}

function loadLevel(index) {
  state.currentIndex = index;
  state.found = new Set();
  state.locked = false;

  const level = levels[index];
  els.levelKicker.textContent = `第 ${index + 1} / ${levels.length} 关`;
  els.levelTitle.textContent = level.title;
  els.sceneImage.src = level.scene;
  els.sceneImage.alt = `${level.title}安全隐患找茬场景`;
  els.foundStatus.textContent = `已找到 0/${level.hazards.length} 处`;
  els.scoreDisplay.textContent = String(state.score);

  renderProgressDots();
  renderSpots();
  syncSpotsLayer();
}

function renderProgressDots() {
  els.progressDots.innerHTML = levels.map((_, index) => {
    const done = index < state.currentIndex ? " class=\"done\"" : "";
    return `<span${done}></span>`;
  }).join("");
}

function renderSpots() {
  const level = levels[state.currentIndex];
  els.spotsLayer.innerHTML = "";
  level.hazards.forEach((hazard, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "spot-btn";
    button.dataset.index = String(index);
    button.setAttribute("aria-label", hazard.name);
    button.style.left = `${hazard.x}%`;
    button.style.top = `${hazard.y}%`;
    button.style.width = `${hazard.w}%`;
    button.style.height = `${hazard.h}%`;
    button.addEventListener("click", onSpotClick);
    els.spotsLayer.appendChild(button);
  });
}

function syncSpotsLayer() {
  const img = els.sceneImage;
  if (!img.naturalWidth || !img.naturalHeight) return;

  const rect = els.sceneShell.getBoundingClientRect();
  const scale = Math.min(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
  const width = img.naturalWidth * scale;
  const height = img.naturalHeight * scale;
  const left = (rect.width - width) / 2;
  const top = (rect.height - height) / 2;

  [els.spotsLayer, els.rippleLayer].forEach((layer) => {
    layer.style.left = `${left}px`;
    layer.style.top = `${top}px`;
    layer.style.width = `${width}px`;
    layer.style.height = `${height}px`;
  });
}

function onSpotClick(event) {
  event.stopPropagation();
  if (state.locked) return;

  const button = event.currentTarget;
  const index = Number(button.dataset.index);
  if (state.found.has(index)) return;

  state.found.add(index);
  button.classList.add("marked");
  state.score += 1;
  els.scoreDisplay.textContent = String(state.score);
  els.foundStatus.textContent = `已找到 ${state.found.size}/${levels[state.currentIndex].hazards.length} 处`;
  sound.correct();

  if (state.found.size === levels[state.currentIndex].hazards.length) {
    state.locked = true;
    window.setTimeout(showAnswer, 550);
  }
}

function onWrongTap(event) {
  if (state.screen !== "game" || state.locked) return;
  if (event.target.closest(".spot-btn")) return;
  const layerRect = els.rippleLayer.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "wrong-ripple";
  ripple.style.left = `${event.clientX - layerRect.left}px`;
  ripple.style.top = `${event.clientY - layerRect.top}px`;
  els.rippleLayer.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  sound.wrong();
}

function showAnswer() {
  const level = levels[state.currentIndex];
  sound.complete();
  els.answerImage.src = level.scene;
  els.answerTitle.textContent = `${level.title}｜答案解析`;
  els.answerList.innerHTML = level.hazards.map((hazard) => (
    `<li><strong>${hazard.name}</strong>：${hazard.tip}</li>`
  )).join("");
  els.answerMarkers.innerHTML = level.hazards.map((hazard, index) => {
    const cx = hazard.x + hazard.w / 2;
    const cy = hazard.y + hazard.h / 2;
    return `<span class="answer-marker" style="left:${cx}%;top:${cy}%;">${index + 1}</span>`;
  }).join("");
  els.nextButton.textContent = state.currentIndex === levels.length - 1 ? "查看成绩" : "下一关";
  els.answerModal.classList.add("is-open");
}

function goNext() {
  els.answerModal.classList.remove("is-open");
  if (state.currentIndex < levels.length - 1) {
    loadLevel(state.currentIndex + 1);
  } else {
    showResult();
  }
}

function showResult() {
  els.finalScore.textContent = String(state.score);
  setScreen("result");
}

function openReward() {
  if (config.rewardUrl && config.rewardUrl !== "#reward-demo") {
    window.location.href = config.rewardUrl;
    return;
  }
  setScreen("reward");
}

function preventDoubleTapZoom() {
  let lastTouchEnd = 0;
  document.addEventListener("touchend", (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, { passive: false });
}

function setAppHeight() {
  document.documentElement.style.setProperty("--app-height", `${window.innerHeight * 0.01}px`);
}

function bindEvents() {
  els.startButton.addEventListener("click", startGame);
  els.homeButton.addEventListener("click", () => setScreen("start"));
  els.sceneShell.addEventListener("click", onWrongTap);
  els.sceneImage.addEventListener("load", syncSpotsLayer);
  els.nextButton.addEventListener("click", goNext);
  els.rewardButton.addEventListener("click", openReward);
  els.restartButton.addEventListener("click", startGame);
  els.backResultButton.addEventListener("click", () => setScreen("result"));
  els.musicToggle.addEventListener("click", sound.toggleMusic);
  window.addEventListener("resize", syncSpotsLayer);
  window.addEventListener("resize", setAppHeight);
  window.addEventListener("orientationchange", () => window.setTimeout(setAppHeight, 260));
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) syncSpotsLayer();
  });
  document.addEventListener("touchstart", sound.unlock, { once: true, passive: true });
  document.addEventListener("mousedown", sound.unlock, { once: true });
  document.addEventListener("click", sound.unlock, { once: true });
}

function init() {
  document.title = config.title;
  setAppHeight();
  bindEvents();
  preventDoubleTapZoom();
  preloadImages();
}

init();
