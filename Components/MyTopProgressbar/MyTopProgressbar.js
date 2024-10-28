import NextTopLoader from "nextjs-toploader";

export default function MyTopProgressbar() {
  return (
    <NextTopLoader
      color="#FF1616"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #FF1616,0 0 5px #FF1616"
      zIndex={1600}
      showAtBottom={false}
    />
  );
}
