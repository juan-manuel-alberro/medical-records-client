import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Loader from 'react-loader';

import Requests from '../../tools/Requests';
import API from '../../config/API';
import Title from '../Title';
import Sitewide from '../../config/Sitewide';

class PatientsList extends React.Component {

  constructor() {
    super();
    this.state = {
      patients: [],
      showResults: false
    };
  }

  componentDidMount() {
    Requests
      .getRequest(API.patients)
      .then( (res, err) => {
        if (err) {
          console.log(err);
          return;
        }
        this.setState({
          patients: res.body,
          showResults: true
        });
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <Title title="Listado de Pacientes" />
          <Loader loaded={this.state.showResults} options={Sitewide.loader}>
            <BootstrapTable data={this.state.patients} pagination={true} search={true} noDataText="Sin resultados" searchPlaceholder="Buscar">
              <TableHeaderColumn dataField="_id" isKey={true} width="50" hidden={true}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField="lastname" dataSort={true}>Apellido</TableHeaderColumn>
              <TableHeaderColumn dataField="name">Nombre</TableHeaderColumn>
              <TableHeaderColumn dataField="education">Educación</TableHeaderColumn>
            </BootstrapTable>
          </Loader>
        </div>
      </div>
    );
  }
}

export default PatientsList;
