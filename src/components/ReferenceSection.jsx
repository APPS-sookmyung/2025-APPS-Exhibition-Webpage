import PropTypes from 'prop-types';

export default function ReferenceSection({references = []}) {
  if (!references || references.length === 0) return null;

  return (
    <div className='mt-10 max-w-[1200px]'>
      <h2 className='text-100 text-2xl font-bold'>다른 프로젝트 구경하기</h2>
      <div className='my-5 w-full border-80 border-t-2 border-dashed' />

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {references.map((ref, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-[20px] bg-[#F5F5F5]'>
            {ref.image ? (
              <img
                src={ref.image}
                alt={ref.title || `참고 자료 ${index + 1}`}
                className='h-full w-full object-cover'
              />
            ) : (
              <div className='flex aspect-[4/3] items-center justify-center'>
                <span className='text-80/60 text-sm'>이미지</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

ReferenceSection.propTypes = {
  references: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
