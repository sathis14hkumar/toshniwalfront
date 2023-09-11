import { NormalButton } from '@/components/common/Inputs/NormalButton';

function Error({ statusCode, err, dev }) {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center py-4">
        <div>
          <p className="fs-36 text-center fw-500">{statusCode}</p>
          <h1 className="text-center fw-600">Something went wrong :(</h1>
        </div>

        {dev === 'true' && <pre>{err?.message}</pre>}
        {dev === 'true' && <pre>{err?.stack}</pre>}

        <div className="action-btn w-100 mt-4 size-md mx-auto">
          <NormalButton
            className="w-100 fw-600"
            // onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </NormalButton>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err, query }) => {
  const errorCode = err ? err.statusCode : 404;
  const statusCode = res ? res.statusCode : errorCode;

  const { dev } = query || {};

  return { statusCode, err, dev };
};

export default Error;
