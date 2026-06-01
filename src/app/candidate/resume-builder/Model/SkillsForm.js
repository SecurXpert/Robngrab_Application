import React from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

export default function SkillsForm({ resumeData, updateItem, deleteItem, addSkill }) {
  return (
    <>
      <style>{`
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .slider::-webkit-slider-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
        }
      `}</style>
      {resumeData.skills.map((skill, index) => (
        <div key={skill.id} className="rounded-lg border border-gray-200 space-y-4 mb-6">
          <div className="bg-orange-50 px-6 py-8 rounded-t-lg flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center gap-3">
              <LuSparkles className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-medium text-gray-900">
                Skill {index + 1}
              </h3>
            </div>
            <button
              onClick={() => deleteItem("skills", skill.id)}
              className="text-red-600 hover:text-red-700"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 px-6">
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Skill Name
            </label>
            <input
              type="text"
              value={skill.name}
              onChange={(e) => updateItem("skills", skill.id, "name", e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              placeholder="e.g. UI/UX Design"
            />
          </div>

          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">
                Professional Level
              </label>
              <span className="text-sm font-medium text-gray-700 min-w-12 text-right px-2 py-1 bg-[#ECEEF2] rounded-lg">
                {skill.proficiency}%
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.proficiency}
                    onChange={(e) =>
                      updateItem("skills", skill.id, "proficiency", parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #000000 0%, #000000 ${skill.proficiency}%, #E5E7EB ${skill.proficiency}%, #E5E7EB 100%)`
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Expert</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addSkill}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        <FiPlus className="w-4 h-4" />
        <span>Add Skill</span>
      </button>
    </>
  );
}
