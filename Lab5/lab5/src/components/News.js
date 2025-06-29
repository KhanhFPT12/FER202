import { newsList } from '../data/newsData';

function News() {
  return (
    <div className="container mt-4 ">
      <h1 style={{ color: 'red' }}>News Category</h1>
      <div className="row">
        {newsList.map((news) => (
          <div key={news.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={news.images} className="card-img-top" alt={news.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{news.title}</h5>
                <p className="card-text" style={{ fontSize: '0.9rem', color: '#555' }}>
                  {news.description.split('.').slice(0, -1).join('.').trim() + '.'} {/* Phần mô tả chính */}
                </p>
                <p className="card-text summary-text" style={{ fontSize: '0.9rem', color: 'blue' }}>
                  {news.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
     
    </div>
  );
}

export default News;