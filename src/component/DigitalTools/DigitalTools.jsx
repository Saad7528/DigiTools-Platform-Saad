import {
  Camera,
  Check,
  FileText,
  Layers,
  PenTool,
  Settings,
  Share2,
} from "lucide-react";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const getIcon = (iconName) => {
  switch (iconName) {
    case "pen-tool":
      return <PenTool className="h-6 w-6 text-blue-500" />;
    case "layers":
      return <Layers className="h-6 w-6 text-orange-500" />;
    case "camera":
      return <Camera className="h-6 w-6 text-teal-500" />;
    case "settings":
      return <Settings className="h-6 w-6 text-yellow-500" />;
    case "file-text":
      return <FileText className="h-6 w-6 text-green-500" />;
    case "share-nodes":
      return <Share2 className="h-6 w-6 text-pink-500" />;
    default:
      return <Settings className="h-6 w-6 text-gray-500" />;
  }
};

const getTagStyle = (tagType) => {
  switch (tagType) {
    case "best-seller":
      return "bg-amber-100 text-amber-700";
    case "popular":
      return "bg-purple-100 text-purple-700";
    case "new":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const DigitalTools = ({ cardItems, setCardItems }) => {
  const [selectId, setSelectId] = useState(1);

  const handleBuyNow = (product) => {
    setCardItems([...cardItems, product]);
    toast.success("Added to cart")
  };

  const RemoveItem = (id) => {
    const filterProduct = cardItems.filter((item) => item.id !== id);
    setCardItems(filterProduct);
    toast.warning("Product removed from cart")
  };

  const buttonList = [
    {
      id: 1,
      name: "Products",
    },
    {
      id: 2,
      name: `Cart(${cardItems.length})`,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/public/dataPack.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  const totalPrice = cardItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="w-9/12 mx-auto mt-30">
      <div className="text-center flex flex-col justify-center items-center space-y-4">
        <h2 className="font-extrabold text-5xl text-[#101727]">
          Premium Digital Tools
        </h2>
        <p className="text-[#627382] text-base/[20px]">
          Choose from our curated collection of premium digital products
          designed
          <br />
          to boost your productivity and creativity.
        </p>
        <div className="flex px-1 justify-center items-center gap-3 w-max border-2 border-[#f6f6f6] rounded-full">
          {buttonList.map((list) => (
            <button
              onClick={() => {
                setSelectId(list.id);
              }}
              key={list.id}
              className={`px-6 py-3.5 ${list.id === selectId && " bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white"} `}
            >
              {list.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 md:mt-10">
        {selectId === 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((product) => (
              <div
                key={product.id}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                    <img src={product.icon} alt="" />
                  </div>
                  {product.tag && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getTagStyle(product.tagType)}`}
                    >
                      {product.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ${product.price}
                  </span>
                  <span className="text-sm font-medium text-slate-400">
                    {product.period === "monthly" ? "/Mo" : "/One-Time"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                    >
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuyNow(product)}
                  disabled={cardItems?.find((card) => card.id === product.id)}
                  className="mt-auto w-full py-3.5 bg-[#8326ff] hover:bg-[#6b1bcc] text-white font-semibold rounded-full transition-colors duration-300 disabled:bg-gray-400"
                >
                  {cardItems?.find((card) => card.id === product.id)
                    ? "Added"
                    : "Buy Now"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="font-sans p-4 md:p-8 flex justify-center ">
            <div className="w-full  bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Your Cart
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                {cardItems.length > 0 ? (
                  cardItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-[#F9FAFC] hover:bg-slate-100 transition-colors duration-300 p-4 rounded-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                          {getIcon(item.icon)}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-slate-900 mb-0.5">
                            {item.name}
                          </h4>
                          <p className="text-sm font-medium text-slate-500">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => RemoveItem(item.id)}
                        className="text-[15px] font-medium text-pink-500 hover:text-pink-600 transition-colors px-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 text-center py-8">
                    Your cart is empty.
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between mb-8">
                <span className="text-base font-medium text-slate-500">
                  Total:
                </span>
                <span className="text-3xl font-bold text-slate-900">
                  ${totalPrice}
                </span>
              </div>

              <button
                className="w-full py-4 bg-[#8326ff] hover:bg-[#6b1bcc] disabled:bg-gray-400 text-white font-semibold text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                disabled={cardItems.length === 0}
                onClick={()=>{
                  setCardItems([])
                  toast.success("Order complete")
                }}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalTools;
