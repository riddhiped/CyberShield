export default function LogsTable({ logs }) {

  const getBadge = (severity) => {

    if (severity === "High") {
      return (
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          High
        </span>
      );
    }

    if (severity === "Medium") {
      return (
        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
          Medium
        </span>
      );
    }

    return (
      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        Low
      </span>
    );
  };

  return (
    <div className="bg-[#111827] p-6 rounded-2xl mt-8 shadow-xl">

      <h2 className="text-2xl font-bold mb-6 text-cyan-400">
        Recent Threat Logs
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-gray-700 text-cyan-300">

              <th className="p-4">Time</th>
              <th className="p-4">Event</th>
              <th className="p-4">Threat Score</th>
              <th className="p-4">Severity</th>

            </tr>
          </thead>

          <tbody>

            {logs.map((log, index) => (

              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-[#1F2937] transition duration-300"
              >

                <td className="p-4">{log.time}</td>

                <td className="p-4 font-medium">
                  {log.message}
                </td>

                <td className="p-4">
                  <span className="text-cyan-400 font-bold">
                    {log.threat_score}
                  </span>
                </td>

                <td className="p-4">
                  {getBadge(log.severity)}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}