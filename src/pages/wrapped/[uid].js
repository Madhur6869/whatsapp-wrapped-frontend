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

export default function wrapped({analytics}) {
  const {
    uid,
    isGroup,
    most_active_member,
    emojis,
    most_active_day,
    average_response_time,
    average_msgs_per_day,
    total_messages,
    time
  } = analytics
  
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
            width: "50%",
            margin:"16px auto ",
            justifyContent: "space-between",
            userSelect: "none"

          }
        }}
        // preventScrollOnSwipe
        disableSwipeByMouse = {true}
        infinite={false}
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: <img
          style={{ height: '100%', width: '100%', transform:"rotate(180deg)"}}
          src="/icons/front.svg"/>,
          style: {
            width: 60,
            height: 60,
            alignSelf: "center",
            background:"black",
            border:"none",
            cursor:"pointer"
          }
        }}
        backwardBtnProps={{
          children: <img
          style={{ height: '100%', width: '100%' }}
          src="/icons/front.svg"/>,
          style: {
            width: 60,
            height: 60,
            alignSelf: "center",
            background:"black",
            border:"none",
            cursor:"pointer"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 2,
              width: 48,
              borderRadius: "0%",
              border: 0,
              margin:"32px 4px",
              background:"rgb(255,255,255,0.3)"
            }
          },
          activeItemBtnProps: {
            style: {
              height: 2,
              width: 48,
              borderRadius: "0%",
              border: 0,
              margin:"32px 4px",
              background: "#FFFFFF"
            }
          }
        }}
        itemsToShow={1}
        speed={500}
        centerMode
      >
         <Emojis 
         style={{height:700}}
         labels = {[...emojis.map((obj)=> obj.emoji)]}
         values = {[...emojis.map((obj)=> obj.count)]}
        />
          {isGroup && <MostActiveMember name={most_active_member.name} count={most_active_member.messages} />}
          <AvgResponseTime time={`${average_response_time} mins`} />
          <TotalMessages count={total_messages} />
          <AvgNumberOfMessages count={average_msgs_per_day} />
          <MostActiveDays
            labels={Object.keys(most_active_day)}
            values={Object.values(most_active_day)}
          />
      </Carousel>
      </div>

      <div>
    </div>
    </main>
  );
}

export async function getServerSideProps(params) {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/getData/?uid=${params.query.uid}`)
  const analytics = await res.json()
  if(res.status!=200) 
  return {
    notFound: true,
  }
  // Pass data to the page via props
  return { props: { analytics } }
}

