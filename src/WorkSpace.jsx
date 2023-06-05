import { useState } from "react";
import DropdownMenu from "./DropDown";
import data from "./data";
const WorkSpace = () => {
  const [filter, setFilter] = useState("Confirmed");

  const [product, setProduct] = useState(data);
  const [order, setOrder] = useState("asc");

  const handleEdit = (id) => {
    setProduct((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };

  const handleSave = (id) => {
    setProduct((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };

  const handleEditToggle = (id) => {
    setProduct((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  }    

  const sorting = () => {
    if (order === "asc") {
      const sorted = [...product].sort((a, b) =>
        a.amount > b.amount ? 1 : -1
      );
      setProduct(sorted);
      setOrder("desc");
    }
    if (order === "desc") {
      const sorted = [...product].sort((a, b) =>
        a.amount < b.amount ? 1 : -1
      );
      setProduct(sorted);
      setOrder("asc");
    }
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold">Order</h1>
        <button className="flex gap-1 bg-[#1B59F8] rounded-xl items-center p-3 px-5 text-[#FFFFFF] font-semibold">
          <img src="/Plus.png" alt="add" width={15} className="font-bold" />
          <h1 className="text-sm">Add Order</h1>
        </button>
      </div>
      <hr className="h-[1.4px] bg-opacity-10 rounded-full w-full my-3 bg-black" />

      <div className="border bg-white  rounded-3xl border-[#EFF0F6] py-2">
        <div className="p-2 px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold text-[#2F2F2F]">
              Confirmed
              <span className="text-[#2F2F2F66] mx-2">258</span>
            </h1>
            <button className="bg-white rounded-full">
              <img src="/Minus.png" alt="icon" width={40} />
            </button>
          </div>

          <hr className="h-[1.4px] bg-opacity-10 rounded-3xl w-full my-3 bg-black " />
        </div>
        <table className=" w-full">
          <thead className=" ">
            <tr>
              <th className="text-left flex items-center gap-2 pl-5">
                <img src="/search.png" alt="icon" width={15} height={15} />
                <h1 className="font-medium text-[#00000080]">Search</h1>
              </th>
              <th>
                <DropdownMenu setFilter={setFilter} />
              </th>
              <th className="flex items-center  gap-3  justify-center">
                <button
                  onClick={() => sorting("amount")}
                  aria-label="AMOUNT"
                  className="bg-[#EFF0F6] flex min-w-full  items-center justify-between gap-3  focus:border-none active:border-none text-[#4F5E74] text-xs p-2 rounded-lg"
                >
                  AMOUNT
                  <img src="/Chevron-down.png" alt="icon" width={10} />
                </button>
                <img src="/group-arrows.png" alt="icon" width={6} />
              </th>

              <th className="">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => sorting("amount")}
                    className="bg-[#EFF0F6] min-h-full w-28 text-[#4F5E74] flex items-center justify-between gap-3 text-xs p-2 rounded-lg"
                  >
                    Place on
                    <img
                      src="/Chevron-down.png"
                      alt="icon"
                      width={10}
                      className="mt-px"
                    />
                  </button>
                  <img src="/group-arrows.png" alt="" width={6} />
                </div>
              </th>

              <th className="">
                <div className="flex   items-center justify-center gap-3">
                  <button className="bg-[#EFF0F6]  text-[#4F5E74] min-w-full  flex items-center justify-between text-xs p-2 rounded-lg">
                    Options
                    <img src="/Chevron-down.png" alt="icon" width={10} />
                  </button>
                  {/* <img src="/group-arrows.png" alt="icon" width={6} /> */}
                </div>
              </th>
            </tr>
          </thead>

          {product.map((product) => (
            <tbody key={product.id}>
              <tr>
                <td className="text-left">
                  <div className="flex items-center gap-4 p-2 px-4 ">
                    <div
                      onClick={() => handleEditToggle(product.id)}
                      className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-[#0000004D] ${product.isEditing ? "bg-[#4F5E74] ": ""}`}
                    >
                     {/* {product.isEditing ? (<span className="bg-[#4F5E74] w-4 h-4 rounded-full"></span>) : null} */}
                    </div>
                    <img src={product.icon} alt={product.name} width={70} />
                    <div className="flex flex-col">
                      <h1 className="text-sm text-black font-semibold">
                        {product.isEditing ? (
                          <input
                            className="border border-sky-300"
                            type="text"
                            value={product.name}
                            onChange={(e) =>
                              setProduct((prevData) =>
                                prevData.map((i) =>
                                  i.id === product.id
                                    ? { ...i, name: e.target.value }
                                    : i
                                )
                              )
                            }
                          />
                        ) : (
                          product.name
                        )}
                      </h1>
                      <p className="text-[#00000080] text-xs ">
                        {product.isEditing ? (
                          <input
                            className="border border-sky-300"
                            type="text"
                            value={product.description}
                            onChange={(e) =>
                              setProduct((prevData) =>
                                prevData.map((i) =>
                                  i.id === product.id
                                    ? { ...i, description: e.target.value }
                                    : i
                                )
                              )
                            }
                          />
                        ) : (
                          product.description
                        )}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-center text-[#70768C]">
                  {product.status[filter]}
                </td>

                <td className="text-center">
                  <div className="text-[#70768C]">
                    {" "}
                    {product.isEditing ? (
                      <input
                        className="border border-sky-300"
                        type="number"
                        value={product.amount}
                        onChange={(e) =>
                          setProduct((prevData) =>
                            prevData.map((i) =>
                              i.id === product.id
                                ? { ...i, amount: e.target.value }
                                : i
                            )
                          )
                        }
                      />
                    ) : (
                      product.amount
                    )}
                  </div>
                </td>
                <td className="text-center">
                  <div className="text-[#70768C]">
                    {product.isEditing ? (
                      <input
                        className="border border-sky-300"
                        type="date"
                        value={product.placeon}
                        onChange={(e) =>
                          setProduct((prevData) =>
                            prevData.map((i) =>
                              i.id === product.id
                                ? { ...i, placeon: e.target.value }
                                : i
                            )
                          )
                        }
                      />
                    ) : (
                      product.placeon
                    )}
                  </div>
                </td>
                <td className="text-center">
                  <div className="text-[#70768C]">
                    {product.isEditing ? (
                      <button onClick={() => handleSave(product.id)}>
                        Save
                      </button>
                    ) : (
                      <button onClick={() => handleEdit(product.id)}>
                        ...
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className="bg-white my-8  flex items-center justify-between p-5 rounded-[20px]">
        <div>
          Issue <span>21</span>
        </div>
        <div>
          <img
            src="/Plus-2.png"
            alt="icons"
            className="flex items-center justify-center bg-[#EFF0F6] rounded-3xl"
            width={40}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
