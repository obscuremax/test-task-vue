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