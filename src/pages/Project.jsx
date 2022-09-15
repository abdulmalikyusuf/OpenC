import React from 'react'
import { useParams } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';

import {NavigationRoutes} from "../data/routes"


function Project() {
	const { id } = useParams();
	return (
		<div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Project Name</h4>
          {/* <p className="mb-0">Your web analytics dashboard template.</p> */}
        </div>
      </div>
			<div border="light" className="table-wrapper table-responsive shadow-sm">
			<div>
				<h1>Project {id}</h1>
			</div>
      <div className="pt-0">
        <table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Title</th>
              <th className="border-bottom">Detail</th>
            </tr>
          </thead>
          <tbody>
					<tr>
						<td>#</td>
						<td><span className="fw-normal">Poject Name</span></td>
						<td><span className="fw-normal">Increasing access to edcuation for Adolescent girls in Borno State</span></td>
					</tr>
          </tbody>
        </table>
      </div>
    </div>
		</div>
	)
}

export default Project