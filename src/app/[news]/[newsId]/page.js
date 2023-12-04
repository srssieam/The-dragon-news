import React from 'react';

const NewsDetailsPage = async ({ params }) => {
    const data = await getSingleNews(params.newsId);
    console.log(data)
    return (
        <div>
            {params.newsId}
        </div>
    );
};

export default NewsDetailsPage;