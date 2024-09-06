import ProtectedRoute from '../components/ProtectedRoute';

function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        {/* Dashboard content */}
        <h1 className='text-yellow-400'>Welcome to your Dashboard!</h1>
      </div>
    </ProtectedRoute>
  );
}

export default Dashboard;