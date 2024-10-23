/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { fetchDataRequest } from "../utils/features/fetchProduct/fetchProductSlice";
import { Button } from "./ui/button";
import Modal from "./modal";
// import { openModal } from "@/utils/features/globalState/globalStateSlice";

export default function DataTables() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.data);
  // const { isOpen } = useSelector((state: any) => state.globalstate);
  // console.log(dispatch());

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // const editHandler = (id: any) => {
  //   console.log(`Edit row with id: ${id}`);
  //   // dispatch(openModal());
  //   // You can now pass the row `id` to the modal or edit functionality
  // };

  const deleteHandler = (id: any) => {
    console.log(`Delete row with id: ${id}`);
    // Implement delete functionality using the row `id`
  };

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row: any) => row.price,
      sortable: true,
    },
    {
      name: "Stock",
      selector: (row: any) => row.stock,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row: any) => {
        return (
          <div className='flex gap-2'>
            <Modal />
            <Button
              className='bg-red-300'
              onClick={() => deleteHandler(row.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} pagination />
    </>
  );
}
