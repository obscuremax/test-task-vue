export default function config(conf) {
  
  const url = "https://api.github.com/graphql";
  const token = "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";
  
  const headers = { 
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json'
  };

  const data = conf

  const config = {
    method: 'post',
    url,
    headers,
    data
  };

  return config
}
