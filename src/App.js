import React, { useState } from 'react';
import Ellipse from './Ellipse';
import './App.css';

function App() {
  const [ellipses, setEllipses] = useState([
    { x: 400, y: 300, rx: 100, ry: 50, rotation: 0, fill: false }
  ]);
  const [selectedEllipseIndex, setSelectedEllipseIndex] = useState(0);

  const updateEllipse = (index, key, value) => {
    const newEllipses = ellipses.map((ellipse, i) =>
      i === index ? { ...ellipse, [key]: value } : ellipse
    );
    setEllipses(newEllipses);
  };

  const addEllipse = () => {
    setEllipses([...ellipses, { x: 400, y: 300, rx: 100, ry: 50, rotation: 0, fill: false }]);
    setSelectedEllipseIndex(ellipses.length);
  };

  const deleteEllipse = (index) => {
    const newEllipses = ellipses.filter((_, i) => i !== index);
    setEllipses(newEllipses);
    setSelectedEllipseIndex(newEllipses.length > 0 ? 0 : -1);
  };

  return (
    <div className="App">
      <div className="controls">
        <h1>Ellipse Manipulator pre</h1>
        <button onClick={addEllipse}>Add Ellipse</button>
        {ellipses.length > 0 && (
          <>
            <label>
              Select Ellipse:
              <select
                value={selectedEllipseIndex}
                onChange={(e) => setSelectedEllipseIndex(Number(e.target.value))}
              >
                {ellipses.map((_, index) => (
                  <option key={index} value={index}>
                    Ellipse {index + 1}
                  </option>
                ))}
              </select>
            </label>
            <div key={selectedEllipseIndex}>
              <h2>Ellipse {selectedEllipseIndex + 1}</h2>
              <label>
                X:
                <input
                  type="number"
                  value={ellipses[selectedEllipseIndex].x}
                  onChange={(e) => updateEllipse(selectedEllipseIndex, 'x', Number(e.target.value))}
                />
              </label>
              <label>
                Y:
                <input
                  type="number"
                  value={ellipses[selectedEllipseIndex].y}
                  onChange={(e) => updateEllipse(selectedEllipseIndex, 'y', Number(e.target.value))}
                />
              </label>
              <label>
                Radius X:
                <input
                  type="number"
                  value={ellipses[selectedEllipseIndex].rx}
                  min={0}
                  onChange={(e) => updateEllipse(selectedEllipseIndex, 'rx', Number(e.target.value))}
                />
              </label>
              <label>
                Radius Y:
                <input
                  type="number"
                  value={ellipses[selectedEllipseIndex].ry}
                  min={0}
                  onChange={(e) => updateEllipse(selectedEllipseIndex, 'ry', Number(e.target.value))}
                />
              </label>
              <label>
                Rotation (degrees):
                <input
                  type="number"
                  value={ellipses[selectedEllipseIndex].rotation}
                  onChange={(e) => updateEllipse(selectedEllipseIndex, 'rotation', Number(e.target.value))}
                />
              </label>
              <label>
                Fill:
                <input
                  type="checkbox"
                  checked={ellipses[selectedEllipseIndex].fill}
                  onChange={(e) => updateEllipse(selectedEllipseIndex, 'fill', e.target.checked)}
                />
              </label>
              <button onClick={() => deleteEllipse(selectedEllipseIndex)}>Delete Ellipse</button>
            </div>
          </>
        )}
      </div>
      <div className="canvas-container">
        <Ellipse ellipses={ellipses} />
      </div>
    </div>
  );
}

export default App;
