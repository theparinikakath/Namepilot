import missionImg from '../assets/mission.png';

const Mission = () => {
  const points = [
    "Keep all customer's contact details and interactions at one place.",
    "Manage all types of customer feedback in order to boost the customer satisfaction.",
    "Monitor your brand on the whole web from one platform to do social listening.",
    "Label each interaction of your consumers in your own way.",
    "Analyze competitor's strength and weakness.",
    "Generate Top Notch Reports in Standard Pdf Formats.",
    "Raise and assign tickets to Employees of your organization.",
    "Run review request campaigns and promotional campaigns to your own personalised target audience.",
  ];

  return (
    <section id="mission" style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        {/* Text Left */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'blue',
            }}
          >
            WHY US?
          </h2>
          <ul style={{ color: '#374151', fontSize: '16px', paddingLeft: '20px', listStyle: 'none' }}>
            {points.map((point, index) => (
              <li key={index} style={{ marginBottom: '12px', display: 'flex', alignItems: 'start' }}>
                <span style={{ color: 'green', marginRight: '10px' }}>✅</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Right */}
        <div style={{ flex: 1 }}>
          <img
            src={missionImg}
            alt="Mission"
            style={{
              width: '100%',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
