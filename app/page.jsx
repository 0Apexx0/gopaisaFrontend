"use client";
import { Button, Grid, Stack, Box } from "@mui/material";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageBox from "../components/ImageBox";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}


export default function Home() {
  return (
    <>
    <div className="container bg-red-600 h-22 mx-auto pt-16">
      <div className="container mx-auto w-9/12">
        <Link href={"#"}>heelo</Link>
      </div>
    </div>
    
    <Carousel infinite={true} slidesToSlide={1} height="70" className="h-5/6 mt-1" responsive={responsive}>
      <ImageBox/>
      <ImageBox/>
      <ImageBox/>
      <ImageBox/>
      <ImageBox/>
      <ImageBox/>
      <ImageBox/>
     
    </Carousel>

    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1>Using Material UI with Next.js 13</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4 className="text-4xl text-red-500">(with Tailwind CSS)</h4>
      <Stack direction="row" columnGap={1}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}