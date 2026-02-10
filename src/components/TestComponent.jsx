// src/components/TestComponent.jsx
const TestComponent = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">Tailwind CSS Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-xl text-white">
          <h3 className="text-xl font-bold mb-2">Primary Gradient</h3>
          <p>This uses custom gradient colors</p>
        </div>
        
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-xl text-white">
          <h3 className="text-xl font-bold mb-2">Accent Gradient</h3>
          <p>This uses custom accent colors</p>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <h3 className="text-xl font-bold mb-2">Success Gradient</h3>
          <p>This uses default Tailwind colors</p>
        </div>
      </div>
      
      <button className="btn-primary mr-4">Primary Button</button>
      <button className="btn-secondary">Secondary Button</button>
      
      <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl">
        <p className="text-gray-600">If you see styled components, Tailwind is working!</p>
      </div>
    </div>
  );
};

export default TestComponent;