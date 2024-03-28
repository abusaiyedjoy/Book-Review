import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};





const Pages_to_Read = () => {

  const items = JSON.parse(localStorage.getItem('donateditem') || '[]');
  if (items.length === 0) {
    return <div className="flex flex-col items-center justify-center pt-32">
      <p className="mb-2 text-2xl font-bold text-center text-green-500 md:text-3xl">Oops!</p>
      <p className="mb-8 text-center font-medium text-gray-600 md:text-lg">
        There is no books item in your read books tab.
      </p>
    </div>;
  }

  const chartData = items.map((item, index) => ({
    name: item.bookName,
    uv: item.totalPages,
    fill: colors[index % colors.length]
  }));

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <div className='rounded-xl my-8 py-3 text-center w-[300px] md:w-[350px] mx-auto bg-[#F3F3F3]'>
        <h1 className=' text-2xl md:text-3xl font-bold'><i>My read books chart</i></h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pages_to_Read;