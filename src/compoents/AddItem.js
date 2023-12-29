// import React from "react";
// class AddItem extends React.Component {
//   // note class component me hum this.state ya fir this.props ka use krte h
//   //   now make a hook we are make a sstae not state hook

//   constructor(props) {
//     super(props);
//     this.state = {
//       productName: "",
//       productPrice: 0,
//     };
//   }
//   state = {};
//   render() {
//     return (
//       <form className="row mb-5">
//         <div className="mb-3 col-6">
//           <label htmlFor="inputName" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputName"
//             aria-describedby="name"
//             name="productName"
//             onChange={(e)={
//                 this.setState({productName: e.currentTarget.value})
//             }}
//             value={this.state.productPrice}
//           />
//           {/* <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div> */}
//           <div className="mb-3">
//             <label htmlFor="inputPrice" className="form-label">
//               Price
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               id="price"
//               name="productPrice"
//               onChange={(e)={
//                 this.setState({productPrice: e.currentTarget.value});
//             }}
//             value={this.state.productName}
//             />
//           </div>
//           {/* <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//           />
//           <label className="form-check-label" htmlFor="exampleCheck1">
//             Check me out
//           </label>
//         </div> */}
//           <button
//             type="submit"
//             className="btn btn-primary col-4"
//             onClick={() => {
//               this.props.addItem();
//             }}
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// export default AddItem;
// chatgpt........................................................
import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="mb-3 col-6">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: Number(e.currentTarget.value) });
            }}
            value={this.state.productPrice}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary col-4"
          onClick={() => {
            this.props.addItem();
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
