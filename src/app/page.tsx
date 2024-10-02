import Scene from "@/components/Scene";

// const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })


export default function Home() {
  return (
   <div className="h-screen">
    <Scene/>
   </div>
  );
}
