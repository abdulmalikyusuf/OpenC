import React from 'react'
import { useParams } from 'react-router-dom'


function Project() {
	const { id } = useParams();
	return (
		<div>
      <div className="flex-wrap py-4 d-flex justify-content-between flex-md-nowrap align-items-center">
        <div className="mb-4 d-block mb-md-0">
          <h4>Project Name</h4>
          {/* <p className="mb-0">Your web analytics dashboard template.</p> */}
        </div>
      </div>
			<div border="light" className="shadow-sm table-wrapper table-responsive">
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