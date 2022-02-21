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