import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const FacultyProfile = () => {
  const { facultyId } = useParams();
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await axios.get(`/api/faculty/${facultyId}`);
        setFaculty(res.data);
      } catch (error) {
        console.error("Error loading faculty profile", error);
      }
    };
    fetchFaculty();
  }, [facultyId]);

  if (!faculty) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-60 h-60 object-cover rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-800">{faculty.name}</h1>
          <p className="text-lg text-gray-600">{faculty.designation}</p>
          <p className="text-md text-gray-500 mb-4">{faculty.department}</p>

          <table className="table-auto w-full text-sm text-left mt-4">
            <tbody className="divide-y divide-gray-200">
              <tr><td className="py-1 font-medium">Highest Qualification</td><td>{faculty.highestQualification}</td></tr>
              <tr><td className="py-1 font-medium">Teaching Experience (SVIST)</td><td>{faculty.teachingExperienceSVIST}</td></tr>
              <tr><td className="py-1 font-medium">Teaching Experience (Total)</td><td>{faculty.teachingExperienceTotal}</td></tr>
              <tr><td className="py-1 font-medium">Research Experience</td><td>{faculty.researchExperience}</td></tr>
              <tr><td className="py-1 font-medium">Industry Experience</td><td>{faculty.industryExperience}</td></tr>
              <tr><td className="py-1 font-medium">Subject Interest</td><td>{faculty.subjectInterest}</td></tr>
              <tr><td className="py-1 font-medium">Research Interest</td><td>{faculty.researchInterest}</td></tr>
              <tr><td className="py-1 font-medium">Number of PhDs Guided</td><td>{faculty.phdGuided}</td></tr>
              <tr><td className="py-1 font-medium">Additional Info</td><td>{faculty.additionalInfo}</td></tr>
              <tr><td className="py-1 font-medium">Key Responsibilities</td><td>{faculty.keyResponsibilities}</td></tr>
              <tr><td className="py-1 font-medium">Special Responsibilities</td><td>{faculty.specialResponsibilities}</td></tr>
              <tr><td className="py-1 font-medium">Industrial Training</td><td>{faculty.industrialTraining}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">Publications & Patents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>No. of Publications:</strong> {faculty.totalPublications}</p>
          <p><strong>Patents:</strong> {faculty.patents}</p>
          <p><strong>International Journals:</strong> {faculty.internationalJournal}</p>
          <p><strong>National Journals:</strong> {faculty.nationalJournal}</p>
          <p><strong>Books:</strong> {faculty.books}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Book Chapters:</strong> {faculty.bookChapters}</p>
          <p><strong>International Conferences:</strong> {faculty.internationalConferences}</p>
          <p><strong>National Conferences:</strong> {faculty.nationalConferences}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
