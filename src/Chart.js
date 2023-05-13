import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

function Chart(){
    const data = [
        {
          name: '2023-04-03',
          uv: 4000,
          pv: 1,
          amt: 2400,
        },
        {
          name: '2023-04-04',
          uv: 3000,
          pv: 2,
          amt: 2210,
        },
        {
          name: '2023-04-05',
          uv: 2000,
          pv: 3,
          amt: 2290,
        },
        {
          name: '2023-04-06',
          uv: 2780,
          pv: 3,
          amt: 2000,
        },
        {
          name: '2023-04-07',
          uv: 1890,
          pv: 2,
          amt: 2181,
        },
        {
          name: '2023-04-08',
          uv: 2390,
          pv: 4,
          amt: 2500,
        },
        {
          name: '2023-04-09',
          uv: 2390,
          pv: 2,
          amt: 2500,
        },
        {
          name: '2023-04-10',
          uv: 2390,
          pv: 3,
          amt: 2500,
        },
        {
          name: '2023-04-11',
          uv: 2390,
          pv: 2,
          amt: 2500,
        },
      ];
    return(
      <>
      <BarChart
          width={1175}
          height={263}
          data={data}
          margin={{
            top: 5,

            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={125}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 100, right: 100 }} />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#03a9f3"/>
        </BarChart>
      </>
    )
  }
  
  export {Chart};