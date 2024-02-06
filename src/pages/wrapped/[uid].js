import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Carousel from "react-simply-carousel";

import styles from "@/styles/wrapped.module.scss";

import Navbar from "@/components/Navbar";
import Emojis from "@/components/cards/Emojis";
import MostActiveMember from "@/components/cards/MostActiveMember";
import MostActiveDays from "@/components/cards/MostActiveDays";
import AvgResponseTime from "@/components/cards/AvgResponseTime";
import AvgNumberOfMessages from "@/components/cards/AvgNumberOfMessages";
import TotalMessages from "@/components/cards/TotalMessages";

function wrapped() {
  const router = useRouter();
  console.log(router?.query?.uid);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.carouselContainer}>
        {/* <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0
              }
            },
            activeItemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "black"
              }
            }
          }}
          speed={400}
          easing="linear"
        >
          <Emojis labels={[`U+1F603`, "2", "3", "4"]} values={[1, 2, 3, 4]} />
          <MostActiveMember name="Uncle Roger" count="123,867" />
          <AvgResponseTime time="3 mins" />
          <TotalMessages count="2,05,102" />
          <AvgNumberOfMessages count="600" />
          <MostActiveDays
            labels={[`Mon`, "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            values={[1, 2, 3, 4, 5, 6, 7]}
          />
        </ReactSimplyCarousel> */}
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none"
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={2}
        speed={400}
        centerMode
      >
         <Emojis 
         style={{height:700}}
         labels={[String.fromCodePoint(128512), "2", "3", "4"]} values={[1, 2, 3, 4]} />
          <MostActiveMember name="Uncle Roger" count="123,867" />
          <AvgResponseTime time="3 mins" />
          <TotalMessages count="2,05,102" />
          <AvgNumberOfMessages count="600" />
          <MostActiveDays
            labels={[`Mon`, "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            values={[1, 2, 3, 4, 5, 6, 7]}
          />
      </Carousel>
      </div>

      <div>
    </div>
    </main>
  );
}

export default wrapped;
