import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { ImBarcode } from "react-icons/im";
import { RiVerifiedBadgeLine } from "react-icons/ri";


const CouponCard = ({ coupon, shop_link }) => {
  const { coupon_code, description, expiry_date, condition, coupon_type } =
    coupon;
    const [copid,setcopid] = useState(false)
  return (
    <div>
      <div className="border p-5 w-72  rounded-xl bg-orange-400 space-y-5">
        <h1 className="text-3xl w-10/12 mx-auto font-bold text-center">
          {description}
        </h1>

        <div className="text-center space-y-2">
          <h4 className="text-[#333333]">{coupon_type}</h4>
          <h4 className="text-[#5C4033]">{condition}</h4>
        </div>
        <div className="border-b-8 border-dotted "></div>
        <div className="flex justify-between items-end mt-10">
          <div>
            <p>{expiry_date}</p>
            <ImBarcode className="text-3xl ml-6" />
            <div className="flex">
            <button className="btn btn-sm">{coupon_code}  </button>
            <CopyToClipboard text={coupon_code}
            onCopy={()=>{
                alert('copy done')
                setcopid(true)
            }}>
              {
                copid ? <button className="btn btn-sm"><RiVerifiedBadgeLine /> </button>: <button className="btn btn-sm"><FaCopy /></button>
              }
            </CopyToClipboard>
            </div>
            
          </div>
          <button className="btn btn-sm mt-6">
            
            <a href={shop_link}>Use Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
