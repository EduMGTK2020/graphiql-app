function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let response: T;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  //   const handler = {
  //     pending: () => {
  //       throw suspender;
  //     },
  //     error: () => {
  //       throw response;
  //     },
  //     success: () => response,
  //   };

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }

    // const result = handler[status] ? handler[status]() : handler.default();
    // return result;
  };

  return { read };
}
//   return () => {
//     switch (status) {
//         case 'pending':
//             throw suspender
//         case 'error':
//             throw response
//         default:
//             return response
//     }

//   const read = () => {
//     const result = handler[status] ? handler[status]() : handler.default();
//     return result;
//   };

//   return { read };
// }

export default wrapPromise;
