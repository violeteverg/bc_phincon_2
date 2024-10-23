import DataTables from "../components/dataTable";

export default function ProductList() {
  return (
    <div className='w-full h-screen'>
      <div className='w-[95%] mx-auto flex flex-col justify-center items-center bg-red-300 h-full'>
        <DataTables />
        <h1>test</h1>
      </div>
    </div>
  );
}
