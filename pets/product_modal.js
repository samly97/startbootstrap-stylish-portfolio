// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// const e = React.createElement;

// class App extends React.Component {
//   state = { show: false }

//   showModal = () => {
//     this.setState({ show: true });
//   }
  
//   hideModal = () => {
//     this.setState({ show: false });
//   }
    
//   render() {
//     return (
//       e(
//         'main', null,
//         e(Modal, {show: this.state.show, handleClose : this.hideModal},
//           e('p', null, 'Modal'),
//           e('p', null, 'Data')),
//         e('button', {type: 'button', onClick: this.showModal}, 'Open')
//       )
//     );
//   }
// }

// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = show ? 'modal display-block' : 'modal display-none';

//   return (
//     e('div', {className: showHideClassName},
//       e('section', {className : 'modal-main'},
//         children,
//         e('button', {onClick: handleClose}, 'Close')
//       )
//     )
//   );
// };

// const productCard = document.getElementById('my-modal');
// ReactDOM.render(e(App), productCard);