const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-[#1f1f26] text-black dark:text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-base max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            A community of garden lovers sharing tips, knowledge, and sustainable ideas to grow together.
          </p>
        </div>

        {/* Mission */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            We empower gardeners at all levels to connect, learn, and thrive through accessible, sustainable, and joyful gardening experiences.
          </p>
        </div>

        {/* Team */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Meet the Team</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "John Doe",
                role: "Founder & Lead Gardener",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJOxssU3TRhutaiO3s3733_IH4YHOdCS6hg&s",
                bio: "John brings years of experience and passion into our growing community.",
              },
              {
                name: "Jane Smith",
                role: "Community Manager",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsN5yVbE4fdTN_hCCY2W5yW5kHxOeVLRn_KriOpbJ7_a_HjIbEOQMNsvYpJcGVi5rUYso&usqp=CAU",
                bio: "Jane ensures a welcoming space for all members to connect and share.",
              },
              {
                name: "Emily Green",
                role: "Sustainability Expert",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHibIe4cZzr__jX69NIoo5uIygxSUylfmPZ_Db5PCU2YMLSltq_R0yMBMYa9IjARK6L-w&usqp=CAU",
                bio: "Emily leads our green mission through education and advocacy.",
              },
            ].map(({ name, role, image, bio }) => (
              <div key={name} className="bg-gray-50 dark:bg-[#2e2e2e] p-6 rounded-lg text-center shadow">
                <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm">{role}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "We prioritize eco-friendly, future-ready gardening practices.",
              },
              {
                icon: "🤝",
                title: "Community",
                desc: "A welcoming space for all gardening lovers.",
              },
              {
                icon: "📘",
                title: "Learning",
                desc: "Grow your knowledge with tips, guides, and real stories.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-50 dark:bg-[#2e2e2e] p-6 rounded-lg text-center shadow">
                <div className="text-4xl mb-2">{icon}</div>
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Have questions or suggestions? We’d love to hear from you!
          </p>
          <a
            href="mailto:dev.rakibislam@gmail.com"
            className="inline-block mt-2 px-6 py-2 rounded shadow bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;