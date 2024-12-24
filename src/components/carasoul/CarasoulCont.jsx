"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "./NextPrevDotBtn";
// import Autoplay from "embla-carousel-autoplay";
import "./car.module.css";

const CarasoulCont = (props) => {
  const {
    options,
    isUperDot,
    isDot,
    isTeamMember,
    emblaRef: propEmblaRef,
    emblaApi: propEmblaApi,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    options
    // props.autoplay && [Autoplay()]
  );

  const actualEmblaRef = propEmblaRef || emblaRef;
  const actualEmblaApi = propEmblaApi || emblaApi;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () =>
      props.refApi
        ? props.refApi.scrollPrev()
        : actualEmblaApi && actualEmblaApi.scrollPrev(),
    [actualEmblaApi]
  );

  const scrollTo = useCallback(
    (index) => actualEmblaApi && actualEmblaApi.scrollTo(index),
    [actualEmblaApi]
  );

  const onInit = useCallback((actualEmblaApi) => {
    setScrollSnaps(actualEmblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((actualEmblaApi) => {
    setSelectedIndex(actualEmblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!actualEmblaApi) return;

    onInit(actualEmblaApi);
    onSelect(actualEmblaApi);
    actualEmblaApi.on("reInit", onInit);
    actualEmblaApi.on("reInit", onSelect);
    actualEmblaApi.on("select", onSelect);
  }, [actualEmblaApi, onInit, onSelect]);

  const scrollNext = useCallback(
    () =>
      props.refApi
        ? props.refApi.scrollNext()
        : actualEmblaApi && actualEmblaApi.scrollNext(),
    [actualEmblaApi]
  );
  useEffect(() => {
    if (props.scrollNext) {
      scrollNext();
      props.setScrollNext(false);
    }
  }, [props.scrollNext]);

  useEffect(() => {
    if (props.scrollPrev) {
      scrollPrev();
      props.setScrollPrev(false);
    }
  }, [props.scrollPrev]);

  return (
    <div className={props.classname + " overflow-hidden relative"}>
      <div className={`embla `}>
        <div
          className="embla__viewport"
          ref={props?.refData ? props?.refData : actualEmblaRef}
        >
          <div className="embla__container flex flex-row gap-x-3 ">
            {props.children}
          </div>
        </div>
      </div>
      {isDot && (
        <>
          {isUperDot ? (
            <div
              className={`embla__dots ${
                isTeamMember ? "mt-[10px]" : "mt-[-30px]"
              } absolute   flex justify-center self-center left-0 right-0`}
            >
              {scrollSnaps.map((d, index) => (
                <DotButton
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`bg-black w-[12px] border-[2px] ${
                    isTeamMember ? "border-[#050A2F]" : "border-white"
                  }  h-[12px] ml-2 rounded-lg  ${
                    index === selectedIndex
                      ? isTeamMember
                        ? "bg-[#050A2F]"
                        : "bg-white"
                      : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="embla__dots   flex justify-center mt-4">
              {scrollSnaps.map((d, index) => (
                <DotButton
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`bg-black  w-[6px] h-[6px] ml-2 rounded-lg  ${
                    index === selectedIndex ? "bg-blue-600" : "bg-black/40"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CarasoulCont;
