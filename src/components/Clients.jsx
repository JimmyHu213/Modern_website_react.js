import React from "react";
import { clients } from "../constants/config";
import styles from "../style";

const Clients = () => {
  return (
    <>
      <section className={`${styles.flexCenter} my-4 sm:mb-0 mb-10`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((client) => (
            <>
              <div
                key={client.id}
                className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] filter `}
              >
                <img
                  src={client.logo}
                  alt="client"
                  className="sm:w-[192px] w-[100px] object-contain  "
                />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Clients;
