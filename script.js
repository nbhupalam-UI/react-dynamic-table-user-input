"use strict";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 0,
      cols: 0,
      table: null,
    };
  }

  setRows = (e) => {
    this.setState({ rows: e.target.value });
  };

  setCols = (e) => {
    this.setState({ cols: e.target.value });
  };

  createTable = () => {
    const { rows, cols } = this.state;
    const rowsArray = Array.from(Array(Number(rows)), (_, i) => i);
    const colsArray = Array.from(Array(Number(cols)), (_, i) => i);
    const table = (
      <table border="1">
        <tbody>
          {rowsArray.map((_, index) => (
            <tr key={index}>
              {colsArray.map((_, i) => (
                <td key={i}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
    this.setState({
      table,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="left">
          <input type="text" onChange={this.setRows} className="rows" />
          <input type="text" onChange={this.setCols} className="cols" />
        </div>
        <div className="right">
          <button className="create-btn" onClick={this.createTable}>
            Create Table
          </button>
          {this.state.table}
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(<Table />, domContainer);
