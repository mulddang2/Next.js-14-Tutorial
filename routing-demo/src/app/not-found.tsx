function notFound(): React.ReactElement {
  return (
    <div>
      <h2>404 ERROR</h2>
      <p>페이지를 찾을 수 없습니다.</p>
      <p>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다. <br />
        입력하신 주소가 정확한지 다시 한 번 확인해주세요.
      </p>
      <button>이전 페이지</button>
      <button>홈</button>
    </div>
  );
}

export default notFound;
