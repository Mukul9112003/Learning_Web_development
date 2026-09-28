type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function DataList({params}: Props) {
    const id=await params;
    return (
        <h1>{id.id}</h1>
    )
}