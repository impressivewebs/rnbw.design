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
       
    <code class="code">
        <span class="tag">&lt;span</span> <span class="attribute">style</span>=<span class="string">"color:#006400"</span><span class="tag">&gt;</span>rnbw is a modern design and code editor.<span class="tag">&lt;/span&gt;</span><br>
        <span class="tag">&lt;span</span> <span class="attribute">style</span>=<span class="string">"color:#0000CD"</span><span class="tag">&gt;</span>it's simple, flexible, and open.<span class="tag">&lt;/span&gt;</span><br>
        <span class="tag">&lt;span</span> <span class="attribute">style</span>=<span class="string">"color:#800080"</span><span class="tag">&gt;</span>it works with your files.<span class="tag">&lt;/span&gt;</span><br>
        <span class="tag">&lt;span</span> <span class="attribute">style</span>=<span class="string">"color:#EE82EE"</span><span class="tag">&gt;</span>it's powered by the web.<span class="tag">&lt;/span&gt;</span><br>
        <span class="tag">&lt;span</span> <span class="attribute">style</span>=<span class="string">"color:#FF4500"</span><span class="tag">&gt;</span>it's open source.<span class="tag">&lt;/span&gt;</span><br>
        <span class="tag">&lt;span</span> <span class="attribute">style</span>=<span class="string">"color:#FFA500"</span><span class="tag">&gt;</span>it fully embraces open web standards.<span class="tag">&lt;/span&gt;</span><br>
        <span class="tag">&lt;span</span> <span class="attribute">style</span>=<span class="string">"color:#FFD700"</span><span class="tag">&gt;</span>and, it is powered by AI...<span class="tag">&lt;/span&gt;</span>
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
    this.isTyping = true;
    this.typingSpeed = 25; // milliseconds per character
    this.pauseBetweenLines = 1000; // milliseconds between lines
    this.isReverseTyping = false; // New flag to differentiate between forward and reverse typing

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.initTypingEffect();
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

  typeNextChar() {
    if (this.currentSpanIndex < this.spans.length) {
      const span = this.spans[this.currentSpanIndex];
      const text = span.getAttribute("data-text") || span.textContent;
      span.classList.remove("hidden"); // Make sure the span is visible
      if (this.currentCharIndex < text.length) {
        span.textContent += text.charAt(this.currentCharIndex);
        this.currentCharIndex++;
        setTimeout(() => this.typeNextChar(), this.typingSpeed);
      } else {
        this.currentCharIndex = 0;
        this.currentSpanIndex++;
        setTimeout(() => this.typeNextChar(), this.pauseBetweenLines);
      }
    } else {
      // Forward typing is complete
      this.isTyping = false;
      // Set for reverse typing
      this.currentSpanIndex = this.spans.length - 1;
      this.currentCharIndex =
        this.spans[this.currentSpanIndex].getAttribute("data-text").length;
      setTimeout(() => this.reverseTypingEffect(), 2000); // wait for 2 seconds, then start reverse typing
    }
  }

  reverseTypingEffect() {
    if (this.currentSpanIndex >= 0) {
      const span = this.spans[this.currentSpanIndex];
      const text = span.getAttribute("data-text") || span.textContent;
      if (this.currentCharIndex > 0) {
        // Remove the last character
        span.textContent = text.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
        setTimeout(() => this.reverseTypingEffect(), this.reverseTypingSpeed);
      } else {
        // Move to the previous span if it exists, without a pause
        if (this.currentSpanIndex > 0) {
          this.currentSpanIndex--;
          this.currentCharIndex =
            this.spans[this.currentSpanIndex].getAttribute("data-text").length;
          this.reverseTypingEffect();
        } else {
          // Reverse typing is complete, start forward typing again
          this.isReverseTyping = true; // Set the flag as it's now going to start forward typing
          setTimeout(() => this.initTypingEffect(), this.pauseBetweenLines); // wait for 2 seconds, then start forward typing
        }
      }
    }
  }
}

customElements.define("rnbw-preview", RnbwPreview);

document.addEventListener("DOMContentLoaded", function () {});
