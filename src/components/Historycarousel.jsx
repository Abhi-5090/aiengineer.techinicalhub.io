'use client';
import { useEffect, useRef } from 'react';
import { Draggable, InertiaPlugin, gsap } from 'gsap/all';
import Button from './Button';
import Image from '@/components/common/Image';
import { IMAGES } from '@/utils/constants';
export default function HistoryCarousel() {
    const carouselRef = useRef(null);
    const carouselInstanceRef = useRef(null);
    const observerRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(Draggable, InertiaPlugin);
        const carouselElement = carouselRef.current;
        if (!carouselElement)
            return;
        const items = gsap.utils.toArray('.pxl-history-carousel .item-slide');
        if (!items.length)
            return;
        const carousel = buildCarousel(items, {
            radiusX: 1060,
            radiusY: 800,
            activeAngle: -90,
            draggable: true,
            onClick(element, self) {
                self.to(element, { duration: 3, ease: 'linear' }, 'short');
            },
            onActivate(element, self) {
                const slides = gsap.utils.toArray(".pxl-history-carousel .item-slide");
                const thumbContainer = document.querySelector(".pxl-swiper-thumbs");
                const thumbWrapper = document.querySelector(".pxl-thumbs-wrapper");
                const thumbItems = gsap.utils.toArray(".thumb-item");
                if (!slides.length || !thumbItems.length)
                    return;
                thumbItems.forEach((t) => t.classList.remove("active"));
                const activeIndex = slides.indexOf(element);
                const thumbIndex = Math.floor(activeIndex / 2) % thumbItems.length;
                const activeThumb = thumbItems[thumbIndex];
                activeThumb.classList.add("active");
                const offset = -(activeThumb.offsetLeft -
                    thumbContainer.offsetWidth / 2 +
                    activeThumb.offsetWidth / 2);
                gsap.to(thumbWrapper, {
                    x: offset,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
        });
        carousel.render();
        carouselInstanceRef.current = carousel;
        function updateThumbWrapperPosition() {
            const thumbContainer = document.querySelector('.pxl-swiper-thumbs');
            const thumbWrapper = document.querySelector('.pxl-thumbs-wrapper');
            const activeItem = (document.querySelector('.thumb-item.active') || document.querySelector('.thumb-item'));
            if (!thumbContainer || !thumbWrapper || !activeItem)
                return;
            const offset = -(activeItem.offsetLeft - thumbContainer.offsetWidth / 2 + activeItem.offsetWidth / 2);
            gsap.to(thumbWrapper, {
                x: offset,
                duration: 0.8,
                ease: 'power2.out',
            });
        }
        const thumbContainer = document.querySelector('.pxl-swiper-thumbs');
        if (thumbContainer) {
            observerRef.current = new ResizeObserver(updateThumbWrapperPosition);
            observerRef.current.observe(thumbContainer);
            setTimeout(updateThumbWrapperPosition, 100);
        }
        let isScrolling = false;
        const handleClick = (e) => {
            const target = e.target;
            const prevBtn = target.closest('.pxl-swiper-arrow-prev');
            const nextBtn = target.closest('.pxl-swiper-arrow-next');
            if ((prevBtn || nextBtn) && !isScrolling) {
                isScrolling = true;
                if (prevBtn) {
                    carousel.previous();
                }
                else if (nextBtn) {
                    carousel.next();
                }
                setTimeout(() => {
                    isScrolling = false;
                }, 500);
            }
        };
        carouselElement.addEventListener('click', handleClick);
        return () => {
            carouselElement.removeEventListener('click', handleClick);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            if (carouselInstanceRef.current) {
                carouselInstanceRef.current.kill();
            }
        };
    }, []);
    return (<div ref={carouselRef} className="pxl-history-carousel layout-1 relative select-none md:-mt-100">
        <div className="pxl-carousel-inner overflow-hidden">
            <div className="pxl-swiper-wrapper items-center">
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl leading-35 font-semibold mb-15">The Beginning</h4>
                            <p className="text-lg/24 item-des"> Our story began in a small co-working space with a big dream: to revolutionize the creative landscape. Armed with passion and fresh ideas, we launched our first campaign, earning our first major client within months. </p>
                            <div className="sm:pt-37 pt-20 pb-20">
                                <Button label="Join Our Team" href="/team" type="white" btnSm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                                <Image loading="lazy" decoding="async" className="no-lazyload " src={IMAGES.aboutuspic4} width="460" height="580" alt="img2-aboutus" title="img2-aboutus"/>
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl leading-35 font-semibold mb-15">Our Origin</h4>
                            <p className="text-lg/24 item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                            <div className="sm:pt-37 pt-20 pb-20">
                                <Button label="Join Our Team" href="/team" type="white" btnSm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload " src={IMAGES.aboutuspic3} width="460" height="580" alt="img2-aboutus" title="img2-aboutus"/>
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl leading-35 font-semibold mb-15">The Spark</h4>
                            <p className="text-lg/24 item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                                <div className="sm:pt-37 pt-20 pb-20">
                                    <Button label="Join Our Team" href="/team" type="white" btnSm/>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload " src={IMAGES.aboutuspic3} width="460" height="580" alt="img2-aboutus" title="img2-aboutus"/>
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl leading-35 font-semibold mb-15">The Beginning</h4>
                            <p className="text-lg/24 item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                            <div className="sm:pt-37 pt-20 pb-20">
                                <Button label="Join Our Team" href="/team" type="white" btnSm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload " src={IMAGES.aboutuspic4} width="460" height="580" alt="img3-aboutus" title="img3-aboutus"/>
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl leading-35 font-semibold mb-15">The Leap</h4>
                            <p className="text-lg/24 item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                            <div className="sm:pt-37 pt-20 pb-20">
                                <Button label="Join Our Team" href="/team" type="white" btnSm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload " src={IMAGES.aboutuspic4} width="460" height="580" alt="img3-aboutus" title="img3-aboutus"/>
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl leading-35 font-semibold mb-15">Starting Point</h4>
                            <p className="text-lg/24 item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                            <div className="sm:pt-37 pt-20 pb-20">
                                <Button label="Join Our Team" href="/team" type="white" btnSm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload " src={IMAGES.aboutuspic3} width="460" height="580" alt="img2-aboutus" title="img2-aboutus"/>
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-pev-next">
                <div className="text-pev-next">History</div>
                <div className="pxl-swiper-arrows custom-separate ">
                    <div className="pxl-swiper-arrow cursor-pointer pxl-swiper-arrow-prev absolute sm:-left-81 -left-50 -bottom-11 flex items-center justify-center size-50">
                        <span className="pxl-icon">
                            <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="dark:stroke-white stroke-black" d="M49 12H5" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className="dark:stroke-white stroke-black" d="M12 5L5 12L12 19" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </div>
                    <div className="pxl-swiper-arrow cursor-pointer pxl-swiper-arrow-next absolute sm:-right-81 -right-50 -bottom-11 flex items-center justify-center size-50">
                        <span className="pxl-icon">
                            <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="dark:stroke-white stroke-black" d="M8 12H52" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className="dark:stroke-white stroke-black" d="M45 5L52 12L45 19" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="pxl-swiper-slider-thumbs">
                    <div className="pxl-swiper-slider-inner">
                        <div className="pxl-swiper-thumbs overflow-hidden">
                            <div className="pxl-thumbs-wrapper swiper-wrapper">
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2020</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2021</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2022</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2023</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2024</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
function buildCarousel(targets, { radiusX = 200, radiusY = 200, activeAngle = -90, activeElement, onClick, onActivate, onDeactivate, onStart, onStop, draggable, autoAdvance, }) {
    const targetElements = gsap.utils.toArray(targets);
    gsap.set(targetElements, { xPercent: -50, x: 0, yPercent: -50, y: 0 });
    const DEG2RAD = Math.PI / 180;
    const eventTypes = ('ontouchstart' in document.documentElement
        ? 'touchstart,touchmove,touchcancel,touchend'
        : !('onpointerdown' in document.documentElement)
            ? 'mousedown,mousemove,mouseup,mouseup'
            : 'pointerdown,pointermove,pointercancel,pointerup').split(',');
    const round = (value) => Math.round(value * 10000) / 10000;
    const tempDiv = document.createElement('div');
    const quantity = targetElements.length;
    const angleInc = 360 / quantity;
    const wrap = gsap.utils.wrap(0, quantity);
    const angleWrap = gsap.utils.wrap(0, 360);
    let rotation = 0;
    let dragged = false;
    let onPressRotation = 0;
    let currentActiveElement = targetElements[0];
    const autoAdvanceCall = autoAdvance
        ? gsap.delayedCall(parseFloat(autoAdvance.toString()) || 2, () => {
            self.next();
            if (autoAdvanceCall && typeof autoAdvanceCall === 'object') {
                autoAdvanceCall.restart(true);
            }
        })
        : null;
    const xSetters = targetElements.map((el) => gsap.quickSetter(el, 'x', 'px'));
    const ySetters = targetElements.map((el) => gsap.quickSetter(el, 'y', 'px'));
    const self = {
        rotation(value) {
            if (arguments.length && value !== undefined) {
                const prevActive = currentActiveElement;
                rotation = angleWrap(value);
                currentActiveElement = targetElements[wrap(Math.round(-value / angleInc))];
                self.render();
                if (prevActive !== currentActiveElement) {
                    onDeactivate && prevActive && onDeactivate(prevActive, self);
                    onActivate && onActivate(currentActiveElement, self);
                }
            }
            return rotation;
        },
        resize(rx, ry) {
            radiusX = rx;
            radiusY = ry;
            self.render();
        },
        render() {
            self.render = function () {
                const inc = angleInc * DEG2RAD;
                let a = (rotation + activeAngle) * DEG2RAD;
                const activeIndex = targetElements.indexOf(currentActiveElement);
                targetElements.forEach((el) => el.classList.remove('active'));
                for (let i = 0; i < quantity; i++) {
                    xSetters[i](round(Math.cos(a) * radiusX));
                    ySetters[i](round(Math.sin(a) * radiusY));
                    if (i === activeIndex) {
                        gsap.to(targetElements[i], {
                            opacity: 1,
                            rotate: 0,
                            duration: 0.4,
                            ease: 'power1.out',
                        });
                        targetElements[i].classList.add('active');
                    }
                    else if (i === wrap(activeIndex - 1) || i === wrap(activeIndex + 1)) {
                        gsap.to(targetElements[i], {
                            opacity: 1,
                            rotate: i === wrap(activeIndex - 1) ? -10 : 10,
                            duration: 0.4,
                            ease: 'power1.out',
                        });
                    }
                    else if (i === wrap(activeIndex - 2) || i === wrap(activeIndex + 2)) {
                        gsap.to(targetElements[i], {
                            opacity: 0,
                            rotate: i === wrap(activeIndex - 2) ? -20 : 20,
                            duration: 0.4,
                            ease: 'power1.out',
                        });
                    }
                    else if (i === wrap(activeIndex - 3) || i === wrap(activeIndex + 3)) {
                        gsap.to(targetElements[i], {
                            opacity: 0,
                            rotate: i === wrap(activeIndex - 3) ? -40 : 40,
                            duration: 0.4,
                            ease: 'power1.out',
                        });
                    }
                    else {
                        gsap.to(targetElements[i], {
                            opacity: 0,
                            rotate: 0,
                            duration: 0.4,
                            ease: 'power1.out',
                        });
                    }
                    a += inc;
                }
            };
        },
        activeElement(value) {
            if (arguments.length && value) {
                self.rotation(self.elementRotation(value));
            }
            return currentActiveElement;
        },
        elementRotation(element) {
            const index = targetElements.indexOf(gsap.utils.toArray(element)[0]);
            return (quantity - index) * angleInc;
        },
        to(elOrRotation, vars = {}, direction) {
            const rotationValue = typeof elOrRotation === 'number'
                ? elOrRotation
                : typeof elOrRotation === 'string'
                    ? parseFloat(elOrRotation)
                    : self.elementRotation(elOrRotation);
            const tweenVars = {
                ...vars,
                rotation: rotationValue,
                overwrite: true,
            };
            const { onUpdate, onComplete } = tweenVars;
            const _onStart = tweenVars.onStart;
            autoAdvanceCall?.pause();
            tweenVars.onStart = function () {
                onStart?.(currentActiveElement, self);
                _onStart?.call(this);
            };
            tweenVars.onComplete = function () {
                onStop?.(currentActiveElement, self);
                onComplete?.call(this);
                autoAdvanceCall?.restart(true);
            };
            if (direction) {
                const getter = gsap.getProperty(tempDiv);
                tweenVars.onUpdate = function () {
                    self.rotation(getter('rotation'));
                    onUpdate?.call(this);
                };
                tweenVars.rotation = `${rotationValue}_${direction}`;
                return gsap.fromTo(tempDiv, { rotation }, tweenVars);
            }
            return gsap.to(self, tweenVars);
        },
        next(vars = {}, direction) {
            const mergedVars = {
                ...vars,
                duration: 1,
            };
            const element = targetElements[wrap(targetElements.indexOf(currentActiveElement) + 2)];
            self.to(element, mergedVars, direction || 'ccw');
        },
        previous(vars = {}, direction) {
            const mergedVars = {
                ...vars,
                duration: 1,
            };
            const element = targetElements[wrap(targetElements.indexOf(currentActiveElement) - 2)];
            self.to(element, mergedVars, direction || 'cw');
        },
        kill() {
            targetElements.forEach((el) => {
                el.removeEventListener('click', _onClick);
                el.removeEventListener(eventTypes[0], onPress);
                el.removeEventListener(eventTypes[2], onRelease);
                el.removeEventListener(eventTypes[3], onRelease);
            });
            gsap.killTweensOf(self);
            tempDiv.parentNode && tempDiv.parentNode.removeChild(tempDiv);
            autoAdvanceCall && autoAdvanceCall.kill();
            draggableInstance && draggableInstance.kill();
        },
        autoAdvance: autoAdvanceCall || null,
    };
    const _onClick = (e) => {
        if (!dragged) {
            if (autoAdvanceCall && typeof autoAdvanceCall === 'object') {
                autoAdvanceCall.restart(true);
            }
            onClick && onClick(e.currentTarget, self);
        }
    };
    const onPress = (e) => {
        onPressRotation = rotation;
        gsap.set(tempDiv, { rotation: rotation });
        autoAdvanceCall && autoAdvanceCall.pause();
        gsap.killTweensOf(self);
        draggableInstance && draggableInstance.startDrag(e);
        dragged = false;
    };
    const onRelease = (e) => {
        if (draggableInstance) {
            draggableInstance.endDrag(e);
        }
        if (rotation === onPressRotation) {
            autoAdvanceCall && autoAdvanceCall.restart(true);
            if (draggableInstance && draggableInstance.tween) {
                draggableInstance.tween.kill();
            }
            _onClick(e);
        }
    };
    const syncDraggable = () => {
        if (!dragged) {
            onStart && onStart(currentActiveElement, self);
            dragged = true;
        }
        if (draggableInstance) {
            self.rotation(draggableInstance.rotation);
        }
    };
    targetElements[0].parentNode?.appendChild(tempDiv);
    gsap.set(tempDiv, {
        visibility: 'hidden',
        position: 'absolute',
        width: 0,
        height: 0,
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
    });
    targetElements.forEach((el) => {
        if (draggable) {
            el.addEventListener(eventTypes[0], onPress);
            el.addEventListener(eventTypes[2], onRelease);
            el.addEventListener(eventTypes[3], onRelease);
        }
        else {
            el.addEventListener('click', _onClick);
        }
    });
    self.snap = angleInc;
    let draggableInstance = null;
    if (draggable) {
        draggableInstance = Draggable.create(tempDiv, {
            type: 'rotation',
            snap: gsap.utils.snap(2 * angleInc),
            inertia: true,
            onThrowComplete: () => {
                autoAdvanceCall && autoAdvanceCall.restart(true);
                onStop && onStop(currentActiveElement, self);
            },
            onThrowUpdate: syncDraggable,
            onDrag: syncDraggable,
        })[0];
        self.draggable = draggableInstance;
    }
    self.activeElement(gsap.utils.toArray(activeElement || null)[0] || targetElements[0]);
    return self;
}
