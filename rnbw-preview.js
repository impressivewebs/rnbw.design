const rnbwPreviewTemplate = `
<div class="row radius-s border" id="rnbw-preview-wrapper"
    style="flex-direction:row; flex-wrap:nowrap; min-height:730px;">
    <div class="panel hidden-on-mobile justify-stretch border-right">
        <div class="panel">
            <div class="justify-stretch padding-s border-bottom">
                <div class="gap-s align-center">
                    <div class="radius-m icon-s align-center background-secondary"></div>
                    <span class="text-s opacity-m">/</span>
                    <div class="gap-s align-center radius-s">
                        <div class="radius-m icon-s align-center background-secondary"></div>
                        <span class="text-s">Project</span>
                    </div>
                </div>
            </div>
            <div class="border-bottom">
                <div class="justify-stretch padding-xs">
                    <div class="gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/page.svg"></svg-icon>
                        <span class="text-s">Page</span>
                    </div>
                    <div class="row"></div>
                </div>
                <div class="justify-stretch padding-xs">
                    <div class="justify-start gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                        <span class="text-s">Stylesheet</span>
                        <div class="radius-s foreground-primary" style="
                            width: 6px;
                            height: 6px;
                        "></div>
                    </div>
                </div>
                <div class="justify-stretch padding-xs">
                    <div class="gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                        <span class="text-s">Script</span>
                    </div>
                    <div class="row"></div>
                </div>
                <div class="gap-s justify-start padding-s">
                    <div class="icon-xs"></div>
                    <svg-icon src="https://raincons.rnbw.dev/icons/component.svg"></svg-icon>
                    <span class="text-s">Component</span>
                </div>
                <div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <svg-icon src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                            <svg-icon src="https://raincons.rnbw.dev/icons/folder.svg"></svg-icon>
                            <span class="text-s">Folder</span>
                        </div>
                    </div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                            <span class="text-s">Stylesheet</span>
                        </div>
                    </div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                            <span class="text-s">Script</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-bottom">
                <div class="justify-stretch padding-xs background-tertiary">
                    <div class="gap-s padding-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/down.svg" id="heading3-dropdown-icon"
                            class="hidden"></svg-icon>
                        <svg-icon src="https://raincons.rnbw.dev/icons/heading.svg"></svg-icon>
                        <span class="text-s">Heading 3</span>
                    </div>
                </div>

                <div>
                    <div class="justify-stretch padding-xs background-secondary" id="span1" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>
                    <div class="justify-stretch padding-xs background-secondary" id="span2" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span3" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span4" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span5" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span6" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span7" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div>
            <div class="padding-m gap-s panel border-bottom">
                <div class="justify-stretch align-center">
                    <span class="text-s">Settings</span>
                    <div class="row gap-s justify-end">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/plus.svg"></svg-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel padding-m gap-s">
                <div class="justify-stretch">
                    <div class="gap-s box">
                        <span class="text-s">Styles</span>
                    </div>
                    <div class="gap-s justify-end">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/plus.svg"></svg-icon>
                        </div>
                    </div>
                </div>
                <div class="gap-s">
                    <div class="gap-xs border radius-xs padding-xs">
                        <span class="text-s">Style1</span>
                    </div>
                    <div class="gap-xs border radius-xs padding-xs foreground-secondary">
                        <svg-icon src="https://raincons.rnbw.dev/icons/cross.svg"></svg-icon>
                        <span class="text-s">Style2</span>
                    </div>
                    <div class="padding-xs radius-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/states.svg"></svg-icon>
                    </div>
                    <div class="background-secondary-onhover padding-xs radius-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/media.svg"></svg-icon>
                    </div>
                </div>
                <div class="justify-stretch">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs background-secondary">
                            <svg-icon src="https://raincons.rnbw.dev/icons/width.svg"></svg-icon>
                        </div>
                        <span class="text-s">Width</span>
                    </div>
                    <div class="gap-s">
                        <span class="text-s">24px</span>
                    </div>
                </div>
                <div class="justify-stretch opacity-m">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/flex.svg"></svg-icon>
                        </div>
                        <span class="text-s">Display</span>
                    </div>
                    <div class="row gap-s">
                        <span class="text-s">Flex</span>
                    </div>
                </div>
                <div class="justify-stretch">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs background-secondary">
                            <svg-icon src="https://raincons.rnbw.dev/icons/relative.svg"></svg-icon>
                        </div>
                        <span class="text-s">Position</span>
                    </div>
                    <div class="row gap-s">
                        <span class="text-s">Relative</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="box-s gap-l column padding-m">
        <style>
            .hidden {
                display: none;
            }
            .code {
                font-family: 'Fira Code', 'Courier New', Courier, monospace;
                white-space: pre-wrap; /* Since code blocks are not automatically wrapped */
            }
            
            .code .tag {
                color: #ee82ee;
            }
            
            .code .attribute {
                color: #006400;
            }
            
            .code .string {
                color: #ff4500;
            }
            
            .code .comment {
                font-style: italic;
            }
        </style>
        <h3>
            <span class="hidden" style="color: #006400" data-text="rnbw is a modern design and code editor.">
            rnbw is a modern design and code editor.</span>
            <span class="hidden" style="color: #0000cd" data-text="it's simple, flexible, and open.">
            it's simple, flexible, and open.</span>
            <span class="hidden" style="color: #800080" data-text="It works with your files.">It works with your files.</span>
            <span class="hidden" style="color: #ee82ee" data-text="it's powered by the web.">it's powered by the web.</span>
            <span class="hidden" style="color: #ff4500" data-text="it's open source.">it's open source.</span>
            <span class="hidden" style="color: #ffa500" data-text="it fully embraces open web standards.">
            it fully embraces open web standards.</span>
            <span class="hidden" style="color: #ffd700" data-text="and, it is powered by AI...">and, it is powered by AI...</span>
        </h3>

    </div>
    <div class="box-s padding-l border-left background-primary radius-s border opacity-m" style="word-break: break-word;">
       
    <code class="code" id="code">
        <span class="hidden" data-text='&lt;span style="color:#006400"&gt;rnbw is a modern design and code editor.&lt;/span&gt;'>
        <span class="tag">&lt;span</span>
        <span class="attribute">style</span>=<span class="string">"color:#006400"</span>
        <span class="tag">&gt;</span>rnbw is a modern design and code editor.<span class="tag">&lt;/span&gt;</span>
        </span><br>

        <span class="hidden" data-text='&lt;span style="color:#0000cd"&gt;it&#39;s simple, flexible, and open.&lt;/span&gt;'>
        <span class="tag">&lt;span</span>
        <span class="attribute">style</span>=<span class="string">"color:#0000cd"</span>
        <span class="tag">&gt;</span>it&#39;s simple, flexible, and open.<span class="tag">&lt;/span&gt;</span>
        </span><br>

        <span class="hidden" data-text='&lt;span style="color:#800080"&gt;It works with your files.&lt;/span&gt;'>
        <span class="tag">&lt;span</span>
        <span class="attribute">style</span>=<span class="string">"color:#800080"</span>
        <span class="tag">&gt;</span>It works with your files.<span class="tag">&lt;/span&gt;</span>
        </span><br>

        <span class="hidden" data-text='&lt;span style="color:#ee82ee"&gt;it&#39;s powered by the web.&lt;/span&gt;'>
        <span class="tag">&lt;span</span>
        <span class="attribute">style</span>=<span class="string">"color:#ee82ee"</span>
        <span class="tag">&gt;</span>it&#39;s powered by the web.<span class="tag">&lt;/span&gt;</span>
        </span><br>

        <span class="hidden" data-text='&lt;span style="color:#ff4500"&gt;it&#39;s open source.&lt;/span&gt;'>
        <span class="tag">&lt;span</span>
        <span class="attribute">style</span>=<span class="string">"color:#ff4500"</span>
        <span class="tag">&gt;</span>it&#39;s open source.<span class="tag">&lt;/span&gt;</span>
        </span><br>

        <span class="hidden" data-text='&lt;span style="color:#ffa500"&gt;it fully embraces open web standards.&lt;/span&gt;'>
        <span class="tag">&lt;span</span>
        <span class="attribute">style</span>=<span class="string">"color:#ffa500"</span>
        <span class="tag">&gt;</span>it fully embraces open web standards.<span class="tag">&lt;/span&gt;</span>
        </span><br>

        <span class="hidden" data-text='&lt;span style="color:#ffd700"&gt;and, it is powered by AI...&lt;/span&gt;'>
        <span class="tag">&lt;span</span>
        
        
    </code>
    
       
    </div>
</div>
`;

class RnbwPreview extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = rnbwPreviewTemplate;
    this.init();
  }

  init() {
    this.h3 = this.querySelector("h3");
    this.spans = this.h3.querySelectorAll("span.hidden");
    this.currentSpanIndex = 0;
    this.currentCharIndex = 0;

    // Initialize for code typing
    this.codeBlock = this.querySelector("code");
    this.codeLines = this.codeBlock.querySelectorAll("span.hidden");
    this.currentCodeLineIndex = 0;
    this.currentCodeCharIndex = 0;
    this.lastCodeTime = undefined;

    // Common properties
    this.typingSpeed = 20; // milliseconds per character
    this.reverseTypingSpeed = 15; // milliseconds per character
    this.codeTypingSpeed = 10; // milliseconds per character
    this.codeReverseTypingSpeed = 5; // milliseconds per character
    this.pauseBetweenLines = 1000; // milliseconds between lines
    this.pauseAfterComplete = 2000; // milliseconds to pause after completing forward typing
    this.restartDelay = 2000; // milliseconds to delay before restarting after reverse typing
    this.isReverseTyping = false; // New flag to differentiate between forward and reverse typing
    this.isReverseCodeTyping = false; // New flag to differentiate between forward and reverse typing for code

    // Flags to track completion of typing animations
    this.textTypingCompleted = false;
    this.codeTypingCompleted = false;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.initTypingEffect(); // Initialize text typing effect
          this.initCodeTypingEffect(); // Initialize code typing effect
          observer.unobserve(entry.target); // Optional: Stop observing after the animation starts
        }
      });
    }, observerOptions);

    this.observer.observe(this);
  }

  initTypingEffect() {
    // Reset indices for a fresh start if it's coming from reverse typing
    if (this.isReverseTyping) {
      this.currentSpanIndex = 0;
      this.currentCharIndex = 0;
      this.isReverseTyping = false; // Reset the flag
    }

    this.spans.forEach((span) => {
      span.textContent = "";
    });
    this.typeNextChar();
  }

  typeNextChar(timestamp) {
    if (!this.lastCharTime) this.lastCharTime = timestamp + this.restartDelay;
    const progress = timestamp - this.lastCharTime;

    if (this.currentSpanIndex < this.spans.length) {
      const span = this.spans[this.currentSpanIndex];

      const text = span.getAttribute("data-text") || span.textContent;

      span.classList.remove("hidden"); // Make sure the span is visible

      if (this.currentCharIndex < text.length && progress > this.typingSpeed) {
        span.textContent += text.charAt(this.currentCharIndex);
        this.currentCharIndex++;
        this.lastCharTime = timestamp;
      } else if (this.currentCharIndex >= text.length) {
        this.currentCharIndex = 0;
        this.currentSpanIndex++;
        this.lastCharTime = timestamp + this.pauseBetweenLines;
      }

      requestAnimationFrame(this.typeNextChar.bind(this));
    } else {
      // Once typing is complete, reset for reverse typing
      this.currentSpanIndex = this.spans.length - 1;
      this.currentCharIndex =
        this.spans[this.currentSpanIndex].getAttribute("data-text").length;
      this.lastCharTime = undefined;
      requestAnimationFrame(this.reverseTypingEffect.bind(this));
    }
  }

  reverseTypingEffect(timestamp) {
    if (!this.lastCharTime)
      this.lastCharTime = timestamp + this.pauseAfterComplete;
    const progress = timestamp - this.lastCharTime;

    if (this.currentSpanIndex > 0) {
      const span = this.spans[this.currentSpanIndex];
      let text = span.getAttribute("data-text") || span.textContent;

      if (this.currentCharIndex > 0 && progress > this.reverseTypingSpeed) {
        span.textContent = text.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
        this.lastCharTime = timestamp;
      } else if (this.currentCharIndex <= 0) {
        this.currentSpanIndex--;
        if (this.currentSpanIndex >= 0) {
          this.currentCharIndex =
            this.spans[this.currentSpanIndex].getAttribute("data-text").length;
        }
        this.lastCharTime = timestamp;
      }

      requestAnimationFrame(this.reverseTypingEffect.bind(this));
    } else {
      // Reset for the next round of typing
      this.initTypingEffect();
      this.initCodeTypingEffect();
    }
  }
  initCodeTypingEffect() {
    if (this.isReverseCodeTyping) {
      this.currentCodeLineIndex = 0;
      this.currentCodeCharIndex = 0;
      this.isReverseCodeTyping = false;
    }
    this.codeLines.forEach((line) => {
      line.textContent = ""; // Clear content
    });
    this.typeNextCodeLine();
  }

  typeNextCodeLine(timestamp) {
    if (!this.lastCodeCharTime)
      this.lastCodeCharTime = timestamp + this.restartDelay;
    const progress = timestamp - this.lastCodeCharTime;

    if (this.currentCodeLineIndex < this.codeLines.length) {
      const line = this.codeLines[this.currentCodeLineIndex];

      const text = line.getAttribute("data-text") || line.textContent;

      line.classList.remove("hidden"); // Make sure the line is visible

      if (
        this.currentCodeCharIndex < text.length &&
        progress > this.codeTypingSpeed
      ) {
        line.textContent += text.charAt(this.currentCodeCharIndex);
        this.currentCodeCharIndex++;
        this.lastCodeCharTime = timestamp;
      } else if (this.currentCodeCharIndex >= text.length) {
        this.currentCodeCharIndex = 0;
        this.currentCodeLineIndex++;
        this.lastCodeCharTime = timestamp + this.pauseBetweenLines;
      }

      requestAnimationFrame(this.typeNextCodeLine.bind(this));
    } else {
      // Once typing is complete, reset for reverse typing
      this.currentCodeLineIndex = this.codeLines.length - 1;
      this.currentCodeCharIndex =
        this.codeLines[this.currentCodeLineIndex].getAttribute(
          "data-text"
        ).length;
      this.lastCodeCharTime = undefined;
      requestAnimationFrame(this.reverseCodeTypingEffect.bind(this));
    }
  }

  reverseCodeTypingEffect(timestamp) {
    if (!this.lastCodeCharTime)
      this.lastCodeCharTime = timestamp + this.pauseAfterComplete;
    const progress = timestamp - this.lastCodeCharTime;

    if (this.currentCodeLineIndex > 0) {
      const line = this.codeLines[this.currentCodeLineIndex];
      const text = line.getAttribute("data-text") || line.textContent;

      if (
        this.currentCodeCharIndex > 0 &&
        progress > this.codeReverseTypingSpeed
      ) {
        line.textContent = text.substring(0, this.currentCodeCharIndex - 1);
        this.currentCodeCharIndex--;
        this.lastCodeCharTime = timestamp;
      } else if (this.currentCodeCharIndex <= 0) {
        this.currentCodeLineIndex--;
        if (this.currentCodeLineIndex >= 0) {
          this.currentCodeCharIndex =
            this.codeLines[this.currentCodeLineIndex].getAttribute(
              "data-text"
            ).length;
        }
        this.lastCodeCharTime = timestamp;
      }

      requestAnimationFrame(this.reverseCodeTypingEffect.bind(this));
    }
  }
}

customElements.define("rnbw-preview", RnbwPreview);

document.addEventListener("DOMContentLoaded", function () {});
