import React, { useState } from 'react';
import { BookOpen, Lightbulb, FileText, Download, Sparkles, ArrowRight, CheckCircle, Zap, Users } from 'lucide-react';

interface ArticleSection {
  title: string;
  content: string;
  examples?: string[];
}

interface GeneratedArticle {
  title: string;
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
  references: string[];
}

function App() {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState<GeneratedArticle | null>(null);
  const [activeTab, setActiveTab] = useState<'input' | 'output'>('input');

  const suggestedTopics = [
    'Machine Learning Fundamentals',
    'Web Development Best Practices',
    'Data Science Introduction',
    'Digital Marketing Strategies',
    'Psychology of Learning',
    'Sustainable Energy Solutions'
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    setActiveTab('output');
    
    // Simulate API call with timeout
    setTimeout(() => {
      const mockArticle: GeneratedArticle = {
        title: `Comprehensive Guide to ${topic}`,
        introduction: `This comprehensive guide explores the fundamental concepts, practical applications, and advanced techniques related to ${topic}. Whether you're a beginner looking to understand the basics or an advanced learner seeking to deepen your knowledge, this article provides structured learning materials with real-world examples and actionable insights.`,
        sections: [
          {
            title: 'Overview and Fundamentals',
            content: `Understanding the core principles of ${topic} is essential for building a solid foundation. This section covers the basic terminology, key concepts, and historical context that shaped the field.`,
            examples: ['Definition and scope', 'Historical development', 'Key terminology']
          },
          {
            title: 'Practical Applications',
            content: `Real-world applications demonstrate how ${topic} principles are implemented across various industries and use cases.`,
            examples: ['Industry case studies', 'Common implementations', 'Success stories']
          },
          {
            title: 'Advanced Techniques and Best Practices',
            content: `Advanced practitioners can benefit from understanding sophisticated approaches and industry best practices for ${topic}.`,
            examples: ['Expert methodologies', 'Performance optimization', 'Common pitfalls to avoid']
          },
          {
            title: 'Tools and Resources',
            content: `A curated collection of tools, frameworks, and resources to support your learning and implementation of ${topic}.`,
            examples: ['Recommended tools', 'Learning platforms', 'Community resources']
          }
        ],
        conclusion: `Mastering ${topic} requires a combination of theoretical understanding and practical experience. By following the structured approach outlined in this guide, learners can progressively build their expertise and apply these concepts effectively in their respective fields.`,
        references: [
          'Academic Research Papers',
          'Industry Publications',
          'Expert Interviews and Case Studies',
          'Official Documentation and Guidelines'
        ]
      };
      
      setGeneratedArticle(mockArticle);
      setIsGenerating(false);
    }, 2000);
  };

  const handleTopicSuggestion = (suggestedTopic: string) => {
    setTopic(suggestedTopic);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">EduGen</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Features</button>
              <button className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Examples</button>
              <button className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Pricing</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Educational Content</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Generate Structured
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Educational Content</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Transform your topics and keywords into comprehensive, well-structured educational articles and guides. 
            Perfect for educators, content creators, and lifelong learners.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">10x Faster</div>
                <div className="text-slate-600">Content Creation</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">100%</div>
                <div className="text-slate-600">Structured Output</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">50K+</div>
                <div className="text-slate-600">Happy Educators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Application */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('input')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'input'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                <Lightbulb className="h-5 w-5 inline-block mr-2" />
                Input & Generate
              </button>
              <button
                onClick={() => setActiveTab('output')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'output'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                disabled={!generatedArticle && !isGenerating}
              >
                <FileText className="h-5 w-5 inline-block mr-2" />
                Generated Article
              </button>
            </div>
          </div>

          {/* Input Tab */}
          {activeTab === 'input' && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  Create Your Educational Article
                </h2>
                
                {/* Topic Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Main Topic or Subject Area
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Machine Learning, Web Development, Digital Marketing..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                  />
                </div>

                {/* Suggested Topics */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Popular Topics
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {suggestedTopics.map((suggestedTopic, index) => (
                      <button
                        key={index}
                        onClick={() => handleTopicSuggestion(suggestedTopic)}
                        className="px-3 py-2 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-medium transition-colors"
                      >
                        {suggestedTopic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Keywords Input */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Keywords & Focus Areas (Optional)
                  </label>
                  <textarea
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="Add specific keywords, subtopics, or areas you want to emphasize..."
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                  />
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!topic.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Generating Article...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      <span>Generate Educational Article</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Output Tab */}
          {activeTab === 'output' && (
            <div className="bg-white rounded-2xl shadow-xl">
              {isGenerating ? (
                <div className="p-16 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Creating Your Article</h3>
                  <p className="text-slate-600">This may take a few moments...</p>
                </div>
              ) : generatedArticle ? (
                <div className="p-8">
                  {/* Article Header */}
                  <div className="mb-8 border-b border-slate-200 pb-6">
                    <div className="flex justify-between items-start mb-4">
                      <h1 className="text-3xl font-bold text-slate-800 leading-tight">
                        {generatedArticle.title}
                      </h1>
                      <div className="flex space-x-2">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>PDF</span>
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                          <FileText className="h-4 w-4" />
                          <span>Export</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-slate-800 mb-3">Introduction</h2>
                    <p className="text-slate-700 leading-relaxed">{generatedArticle.introduction}</p>
                  </div>

                  {/* Sections */}
                  <div className="space-y-8 mb-8">
                    {generatedArticle.sections.map((section, index) => (
                      <div key={index} className="bg-slate-50 rounded-xl p-6">
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">
                          {index + 1}. {section.title}
                        </h2>
                        <p className="text-slate-700 leading-relaxed mb-4">{section.content}</p>
                        {section.examples && (
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-medium text-slate-800 mb-2">Key Points:</h4>
                            <ul className="space-y-1">
                              {section.examples.map((example, exIndex) => (
                                <li key={exIndex} className="text-slate-600 flex items-start space-x-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                  <span>{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Conclusion */}
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-slate-800 mb-3">Conclusion</h2>
                    <p className="text-slate-700 leading-relaxed">{generatedArticle.conclusion}</p>
                  </div>

                  {/* References */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-slate-800 mb-3">References & Further Reading</h2>
                    <ul className="space-y-2">
                      {generatedArticle.references.map((reference, index) => (
                        <li key={index} className="text-slate-600 flex items-start space-x-2">
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{reference}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="p-16 text-center">
                  <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">No Article Generated Yet</h3>
                  <p className="text-slate-600">Switch to the Input tab to create your first article.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">EduGen</span>
          </div>
          <p className="text-slate-400 mb-4">Empowering educators and learners worldwide</p>
          <div className="flex justify-center space-x-6">
            <button className="text-slate-400 hover:text-white transition-colors">Privacy</button>
            <button className="text-slate-400 hover:text-white transition-colors">Terms</button>
            <button className="text-slate-400 hover:text-white transition-colors">Support</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;