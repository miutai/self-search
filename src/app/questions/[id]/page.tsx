import ParamsHandler from "./ParamsHandler";

export default function Page({ params } : {params: Promise<{ id : string}>}) {
  return <ParamsHandler params={params} />;
}
