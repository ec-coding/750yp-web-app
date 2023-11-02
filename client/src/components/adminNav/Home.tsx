
const StatsTile = ({ title, value, gain } : any) => {
    return (
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">{value} 
        {gain < 100 ? <span className="text-sm text-red-500">-{gain} from yesterday</span> : <span className="text-sm text-green-500">+{gain} from yesterday</span>}
        
        </p>
      </div>
    );
  };
  
  export default function AdminHome() {
    return (
      <div className="flex h-screen items-start justify-center bg-white rounded-lg p-4 shadow-l">
        <StatsTile title="Total Visitors" value="1,000" gain="214" />
        <StatsTile title="Total Visitors Today" value="250" gain="32" />
        <StatsTile title="Total Users Signed Up" value="50" gain="12"/>
      </div>
    );
  }