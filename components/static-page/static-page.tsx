const StaticPageContaienr = ({ content }: { content: any }) => {
  return (
    <div className='static-page'>
      <div
        dangerouslySetInnerHTML={{
          __html: content || [],
        }}
      />
    </div>
  );
};

export default StaticPageContaienr;
