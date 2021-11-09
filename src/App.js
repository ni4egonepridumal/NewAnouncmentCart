import React from "react";
import SimpleSlider from "./slider";

function App() {
  const [db, setDb] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [cartPerPage, setcartPerPage] = React.useState(16);

  React.useEffect(() => {
    fetch("https://6075786f0baf7c0017fa64ce.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDb(json);
      });
  }, []);

  const lastCartIndex = currentPage * cartPerPage;
  const firstCartItem = lastCartIndex - cartPerPage;
  const currentCart = db.slice(firstCartItem, lastCartIndex);
  console.log(firstCartItem, lastCartIndex, currentCart);

  const func = () => {
    return setcartPerPage(cartPerPage + db.length);
  };

  return (
    <>
      <div className="container">
        <p className="containerP">Похожие объявления</p>
        <div className="cartItem">
          {currentCart.map((item) => {
            return item.seen ? (
              <div className="cartItem__inner background" key={item.id}>
                <SimpleSlider />
                <svg
                  className="cartItem__deliveryImg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#00a0ab"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.42149 19.4356C7.50378 19.4356 8.38115 18.5583 8.38115 17.476C8.38115 16.3937 7.50378 15.5163 6.42149 15.5163C5.33919 15.5163 4.46182 16.3937 4.46182 17.476C4.46182 18.5583 5.33919 19.4356 6.42149 19.4356Z" />
                  <path d="M19.6681 7.15701C19.3836 6.62474 18.8285 6.29297 18.225 6.29432H15.9336V9.35927C15.9336 9.70064 16.2333 9.97678 16.5748 9.97678H21.1774L19.6681 7.15701Z" />
                  <path d="M17.5007 15.5163C16.4183 15.5163 15.5409 16.3937 15.5409 17.4761C15.5409 18.5585 16.4183 19.4359 17.5007 19.4359C18.5831 19.4359 19.4605 18.5585 19.4605 17.4761C19.4605 17.4761 19.4605 17.476 19.4605 17.476C19.4592 16.3942 18.5825 15.5175 17.5007 15.5163Z" />
                  <path d="M22.6466 12.064L21.6335 10.7729H16.5748C15.7943 10.7729 15.1374 10.1396 15.1374 9.35918V5.58964C15.1447 5.27131 14.8925 5.00741 14.5742 5.00015C14.5629 4.9999 14.5516 4.99995 14.5403 5.0004H2.63458C2.29315 5.0004 2 5.24822 2 5.58964V16.4847C2 16.8262 2.29315 17.0928 2.63458 17.0928H3.69119C3.89637 15.585 5.285 14.529 6.79282 14.7341C8.01972 14.901 8.98457 15.8659 9.15153 17.0928H14.7706C14.9759 15.5849 16.3646 14.529 17.8725 14.7342C19.0993 14.9012 20.064 15.866 20.231 17.0928H22.3654C22.7068 17.0928 23 16.8262 23 16.4847V13.0707C22.9966 12.7053 22.8724 12.3514 22.6466 12.064Z" />
                </svg>
                <svg
                  className="cartItem__saveImg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="#00a0ab"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 3.15789L8 0L15.5 3.15789V11.0526C14.4286 18.9474 8 20 8 20C8 20 1.57143 18.9474 0.5 11.0526V3.15789ZM8.43716 6.05071C8.24671 5.70761 7.7533 5.7076 7.56284 6.05071L6.77945 7.46196C6.70691 7.59262 6.57974 7.68399 6.43276 7.71103L4.83876 8.0043C4.44683 8.0764 4.29263 8.5556 4.56895 8.84274L5.6728 9.98982C5.7783 10.0995 5.82814 10.2512 5.80822 10.402L5.60032 11.9761C5.54863 12.3674 5.94958 12.6615 6.30735 12.4947L7.78867 11.8038C7.92263 11.7414 8.07737 11.7414 8.21133 11.8038L9.69266 12.4947C10.0504 12.6615 10.4514 12.3674 10.3997 11.9761L10.1918 10.402C10.1719 10.2512 10.2217 10.0995 10.3272 9.98982L11.4311 8.84274C11.7074 8.5556 11.5532 8.0764 11.1613 8.0043L9.56725 7.71103C9.42027 7.68399 9.29309 7.59262 9.22056 7.46196L8.43716 6.05071Z"
                  />
                </svg>
                <svg
                  className="cartItem__likeImg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7145 22.3777L12.0346 22.6553L12.3609 22.3852C13.7603 21.2268 15.9105 19.3458 17.8187 17.4619C18.7725 16.5203 19.6721 15.5719 20.3888 14.7086C21.0941 13.859 21.6617 13.0463 21.9022 12.3825C22.9848 9.3955 22.7974 5.73779 19.6122 3.72888C17.6001 2.45985 15.589 2.78969 14.1306 3.40281C13.4019 3.70916 12.7982 4.09036 12.3774 4.39363C12.2533 4.4831 12.1445 4.56621 12.0524 4.63922C12.0244 4.61489 11.9949 4.5894 11.9638 4.5629C11.7025 4.33971 11.334 4.04131 10.9066 3.74188C10.4805 3.44341 9.98677 3.13747 9.47528 2.90464C8.96903 2.6742 8.41214 2.4999 7.86869 2.5C6.19655 2.5003 4.01031 3.18253 2.76019 5.02228C1.07992 7.49509 1.07994 11.172 2.76022 13.6446C3.42257 14.6193 5.07482 16.289 6.82054 17.9439C8.58336 19.615 10.4931 21.3185 11.7145 22.3777Z"
                    stroke="#2C2C2C"
                  />
                </svg>
                <svg
                  className="cartItem__statImg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 2.73684V21.2632L9.5 21.2669C9.49997 21.3799 9.49981 21.9023 9.73278 22.4119C9.85392 22.6768 10.0453 22.9547 10.346 23.1653C10.6505 23.3786 11.0346 23.5 11.5 23.5C11.9654 23.5 12.3495 23.3786 12.654 23.1653C12.9547 22.9547 13.1461 22.6768 13.2672 22.4119C13.5002 21.9023 13.5 21.3799 13.5 21.2669L13.5 21.2632V2.73684C13.5 2.38076 13.4113 1.84835 13.1246 1.38729C12.8213 0.899478 12.2959 0.5 11.5 0.5C10.7041 0.5 10.1787 0.899478 9.87539 1.38729C9.5887 1.84835 9.5 2.38076 9.5 2.73684Z"
                    stroke="#2C2C2C"
                  />
                  <path
                    d="M16.5 7.34211V21.6579L16.5 21.6609C16.5 21.757 16.4998 22.2045 16.7572 22.6395C17.0432 23.1228 17.5906 23.5 18.5 23.5C19.4094 23.5 19.9568 23.1228 20.2428 22.6395C20.5002 22.2045 20.5 21.757 20.5 21.6609L20.5 21.6579V7.34211C20.5 7.02628 20.3986 6.57393 20.0895 6.18983C19.7632 5.78424 19.2408 5.5 18.5 5.5C17.7592 5.5 17.2368 5.78424 16.9105 6.18983C16.6014 6.57393 16.5 7.02628 16.5 7.34211Z"
                    stroke="#2C2C2C"
                  />
                  <path
                    d="M2.5 10.1053V21.8947L2.5 21.8963C2.49999 21.9845 2.49994 22.3934 2.78144 22.7852C3.08545 23.2083 3.63206 23.5 4.5 23.5C5.36794 23.5 5.91455 23.2083 6.21856 22.7852C6.50006 22.3934 6.50001 21.9845 6.5 21.8963V21.8947V10.1053C6.5 9.80295 6.38228 9.39728 6.05762 9.06503C5.72148 8.72103 5.20807 8.5 4.5 8.5C3.79193 8.5 3.27852 8.72103 2.94238 9.06503C2.61772 9.39728 2.5 9.80295 2.5 10.1053Z"
                    stroke="#2C2C2C"
                  />
                </svg>
                <div className="cartItem__seen">Просмотрено</div>
                <div className="cartItem__oldPrice">{item.oldPrice} Р</div>
                <div className="cartItem__newPrice">{item.price} Р</div>
                <div className="cartItem__name">{item.title}</div>
                <div className="cartItem__locality">{item.locality}</div>
                <div className="cartItem__date">{item.date}</div>
              </div>
            ) : (
              <div className="cartItem__inner" key={item.id}>
                <SimpleSlider />
                <svg
                  className="cartItem__deliveryImg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#C7C7C7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.42149 19.4356C7.50378 19.4356 8.38115 18.5583 8.38115 17.476C8.38115 16.3937 7.50378 15.5163 6.42149 15.5163C5.33919 15.5163 4.46182 16.3937 4.46182 17.476C4.46182 18.5583 5.33919 19.4356 6.42149 19.4356Z" />
                  <path d="M19.6681 7.15701C19.3836 6.62474 18.8285 6.29297 18.225 6.29432H15.9336V9.35927C15.9336 9.70064 16.2333 9.97678 16.5748 9.97678H21.1774L19.6681 7.15701Z" />
                  <path d="M17.5007 15.5163C16.4183 15.5163 15.5409 16.3937 15.5409 17.4761C15.5409 18.5585 16.4183 19.4359 17.5007 19.4359C18.5831 19.4359 19.4605 18.5585 19.4605 17.4761C19.4605 17.4761 19.4605 17.476 19.4605 17.476C19.4592 16.3942 18.5825 15.5175 17.5007 15.5163Z" />
                  <path d="M22.6466 12.064L21.6335 10.7729H16.5748C15.7943 10.7729 15.1374 10.1396 15.1374 9.35918V5.58964C15.1447 5.27131 14.8925 5.00741 14.5742 5.00015C14.5629 4.9999 14.5516 4.99995 14.5403 5.0004H2.63458C2.29315 5.0004 2 5.24822 2 5.58964V16.4847C2 16.8262 2.29315 17.0928 2.63458 17.0928H3.69119C3.89637 15.585 5.285 14.529 6.79282 14.7341C8.01972 14.901 8.98457 15.8659 9.15153 17.0928H14.7706C14.9759 15.5849 16.3646 14.529 17.8725 14.7342C19.0993 14.9012 20.064 15.866 20.231 17.0928H22.3654C22.7068 17.0928 23 16.8262 23 16.4847V13.0707C22.9966 12.7053 22.8724 12.3514 22.6466 12.064Z" />
                </svg>
                <svg
                  className="cartItem__saveImg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="#C4C4C4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 3.15789L8 0L15.5 3.15789V11.0526C14.4286 18.9474 8 20 8 20C8 20 1.57143 18.9474 0.5 11.0526V3.15789ZM8.43716 6.05071C8.24671 5.70761 7.7533 5.7076 7.56284 6.05071L6.77945 7.46196C6.70691 7.59262 6.57974 7.68399 6.43276 7.71103L4.83876 8.0043C4.44683 8.0764 4.29263 8.5556 4.56895 8.84274L5.6728 9.98982C5.7783 10.0995 5.82814 10.2512 5.80822 10.402L5.60032 11.9761C5.54863 12.3674 5.94958 12.6615 6.30735 12.4947L7.78867 11.8038C7.92263 11.7414 8.07737 11.7414 8.21133 11.8038L9.69266 12.4947C10.0504 12.6615 10.4514 12.3674 10.3997 11.9761L10.1918 10.402C10.1719 10.2512 10.2217 10.0995 10.3272 9.98982L11.4311 8.84274C11.7074 8.5556 11.5532 8.0764 11.1613 8.0043L9.56725 7.71103C9.42027 7.68399 9.29309 7.59262 9.22056 7.46196L8.43716 6.05071Z"
                  />
                </svg>
                <svg
                  className="cartItem__likeImg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7145 22.3777L12.0346 22.6553L12.3609 22.3852C13.7603 21.2268 15.9105 19.3458 17.8187 17.4619C18.7725 16.5203 19.6721 15.5719 20.3888 14.7086C21.0941 13.859 21.6617 13.0463 21.9022 12.3825C22.9848 9.3955 22.7974 5.73779 19.6122 3.72888C17.6001 2.45985 15.589 2.78969 14.1306 3.40281C13.4019 3.70916 12.7982 4.09036 12.3774 4.39363C12.2533 4.4831 12.1445 4.56621 12.0524 4.63922C12.0244 4.61489 11.9949 4.5894 11.9638 4.5629C11.7025 4.33971 11.334 4.04131 10.9066 3.74188C10.4805 3.44341 9.98677 3.13747 9.47528 2.90464C8.96903 2.6742 8.41214 2.4999 7.86869 2.5C6.19655 2.5003 4.01031 3.18253 2.76019 5.02228C1.07992 7.49509 1.07994 11.172 2.76022 13.6446C3.42257 14.6193 5.07482 16.289 6.82054 17.9439C8.58336 19.615 10.4931 21.3185 11.7145 22.3777Z"
                    stroke="#2C2C2C"
                  />
                </svg>
                <svg
                  className="cartItem__statImg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 2.73684V21.2632L9.5 21.2669C9.49997 21.3799 9.49981 21.9023 9.73278 22.4119C9.85392 22.6768 10.0453 22.9547 10.346 23.1653C10.6505 23.3786 11.0346 23.5 11.5 23.5C11.9654 23.5 12.3495 23.3786 12.654 23.1653C12.9547 22.9547 13.1461 22.6768 13.2672 22.4119C13.5002 21.9023 13.5 21.3799 13.5 21.2669L13.5 21.2632V2.73684C13.5 2.38076 13.4113 1.84835 13.1246 1.38729C12.8213 0.899478 12.2959 0.5 11.5 0.5C10.7041 0.5 10.1787 0.899478 9.87539 1.38729C9.5887 1.84835 9.5 2.38076 9.5 2.73684Z"
                    stroke="#2C2C2C"
                  />
                  <path
                    d="M16.5 7.34211V21.6579L16.5 21.6609C16.5 21.757 16.4998 22.2045 16.7572 22.6395C17.0432 23.1228 17.5906 23.5 18.5 23.5C19.4094 23.5 19.9568 23.1228 20.2428 22.6395C20.5002 22.2045 20.5 21.757 20.5 21.6609L20.5 21.6579V7.34211C20.5 7.02628 20.3986 6.57393 20.0895 6.18983C19.7632 5.78424 19.2408 5.5 18.5 5.5C17.7592 5.5 17.2368 5.78424 16.9105 6.18983C16.6014 6.57393 16.5 7.02628 16.5 7.34211Z"
                    stroke="#2C2C2C"
                  />
                  <path
                    d="M2.5 10.1053V21.8947L2.5 21.8963C2.49999 21.9845 2.49994 22.3934 2.78144 22.7852C3.08545 23.2083 3.63206 23.5 4.5 23.5C5.36794 23.5 5.91455 23.2083 6.21856 22.7852C6.50006 22.3934 6.50001 21.9845 6.5 21.8963V21.8947V10.1053C6.5 9.80295 6.38228 9.39728 6.05762 9.06503C5.72148 8.72103 5.20807 8.5 4.5 8.5C3.79193 8.5 3.27852 8.72103 2.94238 9.06503C2.61772 9.39728 2.5 9.80295 2.5 10.1053Z"
                    stroke="#2C2C2C"
                  />
                </svg>

                <div className="cartItem__oldPrice">{item.oldPrice} Р</div>
                <div className="cartItem__newPrice">{item.price} Р</div>
                <div className="cartItem__name">{item.title}</div>
                <div className="cartItem__locality">{item.locality}</div>
                <div className="cartItem__date">{item.date}</div>
              </div>
            );
          })}
        </div>
        <div className="show_more" onClick={() => func()}>
          Показать еще <img src="images/arrow_down.svg" alt="arrow" />
        </div>
      </div>
    </>
  );
}

export default App;